// src/networkInterceptor.js

export const setupNetworkInterceptor = (callback) => {
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const response = await originalFetch(...args);
    const clonedResponse = response.clone();
    const data = await clonedResponse.json().catch(() => clonedResponse.text());

    callback({
      type: 'fetch',
      url: args[0],
      method: args[1]?.method || 'GET',
      status: response.status,
      headers: response.headers,
      payload: args[1]?.body,
      response: data,
      timing: response.headers.get('date'),
    });

    return response;
  };

  const originalXHR = window.XMLHttpRequest;
  window.XMLHttpRequest = function () {
    const xhr = new originalXHR();

    xhr.addEventListener('load', function () {
      callback({
        type: 'xhr',
        url: xhr.responseURL,
        method: xhr._method,
        status: xhr.status,
        headers: xhr.getAllResponseHeaders(),
        payload: xhr._body,
        response: xhr.responseText,
        timing: xhr.getResponseHeader('date'),
      });
    });

    return xhr;
  };
};
