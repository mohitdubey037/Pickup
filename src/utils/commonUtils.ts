export const uploadFile = (files:Array<File>,{onLoad,onError,onAbort}) => {
    files.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = onAbort;
        reader.onerror = onError;
        reader.onload = onLoad;
        reader.readAsArrayBuffer(file);
      });
}

export const getParamsFromUrl = (search:string) => {
    const qs = search.substring(1);
    const params = qs.split('&').reduce((a, b) => {
        let [key, val] = b.split('=');
        a[key] = val;
        return a;
    }, {});

    return params
 }
