interface ReplicatedStorage extends Instance {
	["Gerald's Module"]: Folder & {
		module: ModuleScript;
	};
	Assets: Folder & {
		Potion: Model & {
			["1"]: MeshPart;
			["3"]: MeshPart;
			["2"]: MeshPart;
			["5"]: MeshPart;
			["4"]: MeshPart;
		};
	};
	rbxts_include: Folder & {
		RuntimeLib: ModuleScript;
		Promise: ModuleScript;
		node_modules: Folder & {
			services: ModuleScript;
			["compiler-types"]: Folder & {
				types: Folder;
			};
			types: Folder & {
				include: Folder & {
					generated: Folder;
				};
			};
		};
	};
}
