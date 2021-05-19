-- Compiled with roblox-ts v1.1.1
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local makeHello = TS.import(script, game:GetService("ReplicatedStorage"), "Gerald's Module", "module").makeHello
print(makeHello("main.server.ts"))
