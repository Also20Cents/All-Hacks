(() => {
    const cheat = (async () => {
        let { stateNode } = Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner;
        const rocks = [...document.querySelector('[class*="rockButton"]').parentElement.children];
        if (!rocks.every(element => element.querySelector('div'))) stateNode.setState({
            choices: [{ type: "fossil", val: 10, rate: .1, blook: "Amber" }, { type: "fossil", val: 25, rate: .1, blook: "Dino Egg" }, { type: "fossil", val: 50, rate: .175, blook: "Dino Fossil" }, { type: "fossil", val: 75, rate: .175, blook: "Stegosaurus" }, { type: "fossil", val: 100, rate: .15, blook: "Velociraptor" }, { type: "fossil", val: 125, rate: .125, blook: "Brontosaurus" }, { type: "fossil", val: 250, rate: .075, blook: "Triceratops" }, { type: "fossil", val: 500, rate: .025, blook: "Tyrannosaurus Rex" }, { type: "mult", val: 1.5, rate: .05 }, { type: "mult", val: 2, rate: .025 }].sort(() => 0.5 - Math.random()).slice(0, 3)
        }, () => {
            rocks.forEach((element, index) => {
                const rock = stateNode.state.choices[index];
                if (element.querySelector('div')) element.querySelector('div').remove();
                const choice = document.createElement("div");
                choice.style.color = "white";
                choice.style.fontFamily = "Macondo";
                choice.style.fontSize = "1em";
                choice.style.display = "flex";
                choice.style.justifyContent = "center";
                choice.style.transform = "translateY(25px)";
                choice.innerText = rock.type === "fossil" ? `+${Math.round(rock.val * stateNode.state.fossilMult) > 99999999 ? Object.values(webpack('74sb')).find(x => x.toString().includes('\xd7'))(Math.round(rock.val * stateNode.state.fossilMult)) : Math.round(rock.val * stateNode.state.fossilMult)} Fossils` : `x${rock.val} Fossils Per Excavation`;;
                element.append(choice);
            });
        });
    });
        cheat(); // Directly call the cheat function without checking for updates
})();
