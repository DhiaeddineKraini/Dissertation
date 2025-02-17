failIfNot(document.startViewTransition, "Missing document.startViewTransition(() => {
        document.documentElement.classList.add("vt-new");
        document.documentElement.classList.remove("vt-old");
    });
    transition.finished.then(() => {
        document.documentElement.classList.remove("vt-new");
        document.documentElement.classList.remove("vt-old");
    });
    transition.ready.then(() => takeScreenshot());
}

