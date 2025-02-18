///<> {}
function performDownload(startedFn, updateFn, completedFn) {
    startedFn();
    let progress = 0;
    const download = setInterval(() => {
        progress += 1;
        updateFn(progress);
        if (progress === 5) {
            clearInterval(download);
            completedFn();
        }
    }, 1000);
}
function started() {
    console.log("Started Download");
}
function update(progress) {
    console.log(`${progress}% of Download`);
}
function completed() {
    console.log("Download Completed");
}
performDownload(started, update, completed);
