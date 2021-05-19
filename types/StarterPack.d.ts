interface StarterPack extends Instance {
	BloxyCola: Tool & {
		Handle: Part & {
			DrinkSound: Sound;
			Mesh: SpecialMesh;
			OpenSound: Sound;
		};
		BloxyColaScript: Script;
	};
	Potion: Tool & {
		["1"]: MeshPart;
		["3"]: MeshPart;
		["2"]: MeshPart;
		["5"]: MeshPart;
		drink: Animation;
		LocalScript: LocalScript;
		Handle: MeshPart;
	};
}
