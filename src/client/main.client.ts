//--// Written By GeraldIn2016 \\--
import { Players, ReplicatedStorage } from "@rbxts/services";
Players.LocalPlayer.WaitForChild("Backpack");

(() => {
    let enabled = true
    let animation: AnimationTrack
    wait(2)

    let tool = Players.LocalPlayer.FindFirstChild("PlayerScripts")?.FindFirstChild("Potion")
    if (!(tool && tool.IsA("ObjectValue"))) { return }
    tool = tool.Value
    if (!(tool && tool.IsA("Tool"))) { return }

    let hum = Players.LocalPlayer?.Character?.FindFirstChildOfClass("Humanoid")

    if (!hum) { return }

    tool.Activated.Connect(() => {
        if (!enabled) { return }
        if (!(tool && tool.IsA("Tool"))) { return }
        enabled = false

        let anim = hum?.FindFirstChildOfClass("Animator")
        let animationKeyFrames = tool?.FindFirstChildOfClass("Animation")
        if (anim && animationKeyFrames) {
            animation = anim.LoadAnimation(animationKeyFrames)
            animation.Play()
        }

        wait(3)
        animation.Stop()
        enabled = true


    })

    tool.Unequipped.Connect(() => {
        animation.Stop()
    })
    /*
    tool.Equipped.Connect(() => {
        let anim = hum?.FindFirstChildOfClass("Animator")
        let animationKeyFrames = hum?.FindFirstChildOfClass("Animation")
        if(anim && animationKeyFrames){
            anim.LoadAnimation(animationKeyFrames)
        }
    })*/
})()
