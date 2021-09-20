export const uploadFile = (files:Array<File>,{onLoad,onError,onAbort}) => {
    files.forEach((file) => {
        const reader = new FileReader();
        reader.onabort = onAbort;
        reader.onerror = onError;
        reader.onload = onLoad;
        reader.readAsArrayBuffer(file);
      });
}