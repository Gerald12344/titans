-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
-- --// Written By GeraldIn2016 \\--
local Players = TS.import(script, TS.getModule(script, "services")).Players
Players.LocalPlayer:WaitForChild("Backpack");
(function()
	local enabled = true
	local animation
	wait(2)
	local _0 = Players.LocalPlayer:FindFirstChild("PlayerScripts")
	if _0 ~= nil then
		_0 = _0:FindFirstChild("Potion")
	end
	local tool = _0
	if not (tool and tool:IsA("ObjectValue")) then
		return nil
	end
	tool = tool.Value
	if not (tool and tool:IsA("Tool")) then
		return nil
	end
	local _1 = Players.LocalPlayer
	if _1 ~= nil then
		_1 = _1.Character
		if _1 ~= nil then
			_1 = _1:FindFirstChildOfClass("Humanoid")
		end
	end
	local hum = _1
	if not hum then
		return nil
	end
	tool.Activated:Connect(function()
		if not enabled then
			return nil
		end
		if not (tool and tool:IsA("Tool")) then
			return nil
		end
		enabled = false
		local _2 = hum
		if _2 ~= nil then
			_2 = _2:FindFirstChildOfClass("Animator")
		end
		local anim = _2
		local _3 = tool
		if _3 ~= nil then
			_3 = _3:FindFirstChildOfClass("Animation")
		end
		local animationKeyFrames = _3
		if anim and animationKeyFrames then
			animation = anim:LoadAnimation(animationKeyFrames)
			animation:Play()
		end
		wait(3)
		animation:Stop()
		enabled = true
	end)
	tool.Unequipped:Connect(function()
		animation:Stop()
	end)
	--[[
		tool.Equipped.Connect(() => {
		let anim = hum?.FindFirstChildOfClass("Animator")
		let animationKeyFrames = hum?.FindFirstChildOfClass("Animation")
		if(anim && animationKeyFrames){
		anim.LoadAnimation(animationKeyFrames)
		}
		})
	]]
end)()
