// [key, group]

var IIPP = ["IIPP", "PROBLEM"];
var PP = ["PP", "PROBLEM"];
var KP = ["KP", "PROBLEM"];
var ODP = ["ODP", "PROBLEM"];
var CSP = ["CSP", "PROBLEM"];
var BPP = ["BPP", "PROBLEM"];

var NonGuillotine = ["Non-Guillotine", "CUT"];
var Guillotine = ["Guillotine", "CUT"];

var _2Staged = ["2-staged", "CUT"];
var _3Staged = ["3-staged", "CUT"];
var _kStaged = ["k-staged", "CUT"];

var Constrained = ["Constrained", "DEMAND"];
var Unconstrained = ["Unconstrained", "DEMAND"];

var Oriented = ["Oriented", "ORIENTED"];
var NonOriented = ["Non-Oriented", "ORIENTED"];

var Survey = ["Survey", "Others"];
var NonOrthogonal = ["Non-Orthogonal", "Others"];

var keywords = [
  IIPP, PP, KP, ODP, CSP, BPP,
  NonGuillotine, Guillotine,
  _2Staged, _3Staged, _kStaged,
  Constrained, Unconstrained,
  Oriented, NonOriented,
  Survey,
  NonOrthogonal,
];