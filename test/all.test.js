var expect = require("expect.js"),
	BaseClass = require("../lib/baseclass"),
	Element,
	Hydrogen,
	Tritium,
	Helium;

describe("Baseclass Tests", function () {
	it("should handle basic inheritance", function () {
		Element = BaseClass.extend({
			mass: 0,
			oxidize: function () {
				return "Some reaction might happen";
			}
		});

		var e = new Element();
		expect(e.mass).to.equal(0);
		expect(e.oxidize()).to.equal("Some reaction might happen");


	});

	it("should handle secondary inheritance", function () {
		Hydrogen = Element.extend({
			mass: 1,
			oxidize: function () {
				return "You get water and a lot of heat";
			}
		});

		Tritium = Hydrogen.extend({
			mass: 3
		});

		Helium = Element.extend({
			mass: 4,
			oxidize: function () {
				return "You get no response.";
			}
		});

		var h = new Hydrogen(),
			t = new Tritium(),
			he = new Helium();

		expect(h.mass).to.equal(1);
		expect(h.oxidize()).to.equal("You get water and a lot of heat");
		expect(t.mass).to.equal(3);
		expect(t.oxidize()).to.equal("You get water and a lot of heat");
		expect(he.mass).to.equal(4);
		expect(he.oxidize()).to.equal("You get no response.");


	});

	it("should copy static props properly", function () {
		Tritium = Hydrogen.extend({
			mass: 3
		},{
			halfLife: 12.32
		});

		expect(Tritium.halfLife).to.equal(12.32);
	});
});
