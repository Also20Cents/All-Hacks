/* THE UPDATE CHECKER IS ADDED DURING COMMIT PREP, THERE MAY BE REDUNDANT CODE, DO NOT TOUCH */

(() => {
    const cheat = (async () => {
        let i = document.createElement('iframe');
        document.body.append(i);
        window.alert = i.contentWindow.alert.bind(window);
        i.remove();
        const { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        if (stateNode.state.phase !== 'select') alert('You must be on the attribute selection page!');
        else stateNode.setState({ myCard: { ...stateNode.state.myCard, strength: 20, charisma: 20, wisdom: 20 } });
    });
    let img = new Image;
    img.src = "https://raw.githubusercontent.com/05Konz/Blooket-Cheats/main/autoupdate/timestamps/doom/maxStats.png?" + Date.now();
    img.crossOrigin = "Anonymous";
    img.onload = function() {
        const c = document.createElement("canvas");
        const ctx = c.getContext("2d");
        ctx.drawImage(img, 0, 0, this.width, this.height);
        let { data } = ctx.getImageData(0, 0, this.width, this.height), decode = "", last;
        for (let i = 0; i < data.length; i += 4) {
            let char = String.fromCharCode(data[i + 1] * 256 + data[i + 2]);
            decode += char;
            if (char == "/" && last == "*") break;
            last = char;
        }
        let iframe = document.querySelector("iframe");
        const [_, time, error] = decode.match(/LastUpdated: (.+?); ErrorMessage: "(.+?)"/);
        if (parseInt(time) <= 1693429947312 || iframe.contentWindow.confirm(error)) cheat();
    }
    img.onerror = img.onabort = () => (img.src = null, cheat());
})();
