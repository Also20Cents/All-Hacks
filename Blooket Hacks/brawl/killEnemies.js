(() => {
    const cheat = (async () => {
        Object.values((function react(r = document.querySelector("body>div")) { return Object.values(r)[1]?.children?.[0]?._owner.stateNode ? r : react(r.querySelector(":scope>div")) })())[1].children[0]._owner.stateNode.state.game.scene.physics.world.bodies.entries.forEach(x => x?.gameObject?.receiveDamage?.(x.gameObject.hp, 1));
    });
