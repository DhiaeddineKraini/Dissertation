test(function() {
            index++;
            localStorage.setItem("" + key + index, "" + val + index);
        }
    });

    localStorage.clear();
}, "Throws QuotaExceededError when the quota has been exceeded");
