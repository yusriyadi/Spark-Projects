const Scene = require('Scene');
const NativeUI = require('NativeUI');
//inisiasi texture dan material
const Textures = require('Textures');
const Materials = require('Materials');

const Diagnostics = require('Diagnostics');



//instance patch editor, untuk komunikasi script x patch editor
const Patches = require('Patches');

//inisiasi icon
const ic1 = Textures.get('ic1');
const ic2 = Textures.get('ic2');
const ic3 = Textures.get('ic3');


//inisiasi lutMaterial
const mat0 = Materials.get('mat0');
const mat1 = Materials.get('mat1');
const mat2 = Materials.get('mat2');

//daftarkan base rectangle, nantinya base rect ini bakal di ubah2 lutmaterialnya
const baseRect= Scene.root.child('Device').child('Camera').child('Focal Distance').child('canvas1').find('rec1');

//inisasi picker
const picker = NativeUI.picker;
var index = 0

//daftarkan icon ke picker 
const config={
	selectedIndex : index,
	items :[
	{image_texture : ic1},
	{image_texture : ic2},
	{image_texture : ic3}
	]

};

picker.configure(config);
picker.visible = true;


//listener picker
picker.selectedIndex.monitor().subscribe(function(index){

	var i = index.newValue; //incrementasi index

	switch(i){
		case 0: 
		baseRect.material = mat1; //set material dari baseRect dengan materialLut1
		Patches.setScalarValue('scriptToEditorVar', 0); //mengrim value ke patch, dipakai untuk triger animasi
		break;
		case 1: 
		baseRect.material =mat0; 
		Patches.setScalarValue('scriptToEditorVar', 0);
		break;
		case 2: 
		baseRect.material = mat2;
		Patches.setScalarValue('scriptToEditorVar', 1);
		Diagnostics.log("Ini Log");
		
		break;
	}

});





