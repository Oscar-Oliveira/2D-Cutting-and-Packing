//[key, description]

var sets = [

  ["AA", "Adamowicz, M., Albano, A.: A Solution of the Rectangular Cutting-Stock Problem. IEEE Trans. Syst. Man. Cybern. SMC-6, 302–310 (1976).", ""],

  ["AB", "Cui, Y., Huang, B.: Heuristic for constrained T-shape cutting patterns of rectangular pieces. Comput. Oper. Res. 39, 3031–3039 (2012).", "http://www.gxnu.edu.cn/Personal/ydcui/English/Paper052.htm"],

  ["ABM", "Andrade, R., Birgin, E.G., Morabito, R.: Two-stage two-dimensional guillotine cutting stock problems with usable leftover. Int. Trans. Oper. Res. 23, 121–145 (2016).", ""],

  ["ABMR", "Andrade, R., Birgin, E.G., Morabito, R., Ronconi, D.P.: MIP models for two-dimensional non-guillotine cutting problems with usable leftovers. J. Oper. Res. Soc. 65, 1649–1663 (2014)."],

  ["AH", "Bortfeldt, A., Gehring, H.: New Large Benchmark Instances for the Two-Dimensional Strip Packing Problem with Rectangular Pieces. Proc. 39th Annu. Hawaii Int. Conf. Syst. Sci. 00, 30b (2006).", "http://www.computational-logistics.org/orlib/topic/2D%20Strip%20Packing/"],

  ["ASSORT", "Beasley, J.E.: An algorithm for the two-dimensional assortment problem. Eur. J. Oper. Res. 19, 253–261 (1985).", "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/assortinfo.html"],

  ["ATP", "Alvarez-Valdés, R., Parajón, A., Tamarit, J.M.: A tabu search algorithm for large-scale guillotine (un)constrained two-dimensional cutting problems. Comput. Oper. Res. 29, 925–947 (2002).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["B", "Cui, Y., Wang, Z., Li, J.: Exact and heuristic algorithms for staged cutting problems. Proc. Inst. Mech. Eng. Part B J. Eng. Manuf. 219, 201–207 (2005).", "http://lagrange.ime.usp.br/~lobato/utdc/instances.php"],

  ["BABU", "Babu, A.R., Babu, N.R.: Effective nesting of rectangular parts in multiple rectangular sheets using genetic and heuristic algorithms. Int. J. Prod. Res. 37, 1625–1643 (1999)."],

  ["BABU2", "Babu, A.R., Babu, N.R.: A generic approach for nesting of 2-D parts in 2-D sheets using genetic and heuristic algorithms. CAD Comput. Aided Des. 33, 879–891 (2001)."],

  ["BENG", "Bengtsson, B.E.E.: Packing rectangular pieces—a heuristic approach. Comput. J. 25, 253–257 (1982).", "http://or.dei.unibo.it/library/orthogonal-stock-cutting-problems"],

  ["BKW", "Burke, E.K., Kendall, G., Whitwell, G.: A New Placement Heuristic for the Orthogonal Stock-Cutting Problem. Oper. Res. 52, 655–671 (2004).", "http://or.dei.unibo.it/library/orthogonal-stock-cutting-problems"],

  ["BRPB", "El-Bouri, A., Rao, J., Popplewell, N., Balakrishnan, S.: An improved heuristic for the two-dimensional cutting stock problem with multiple sized stock sheets. Int. J. Ind. Eng.  Theory Appl. Pract. 13, 198–206 (2006)."],

  ["CGCUT", "Christofides, N., Whitlock, C.: An Algorithm for Two-Dimensional Cutting Problems. Oper. Res. 25, 30–44 (1977).", "https://paginas.fe.up.pt/~esicup/datasets"],

  ["CH", "Cui, Y., Huang, B.: Reducing the number of cuts in generating three-staged cutting patterns. Eur. J. Oper. Res. 218, 358–365 (2012)."],

  ["CHL", "Cung, V., Hifi, M., Cun, B.: Constrained two-dimensional cutting stock problems a best-first branch-and-bound algorithm. Int. Trans. Oper. Res. 7, 185–210 (2000).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["CJCM", "Clautiaux, F., Jouglet, A., Carlier, J., Moukrim, A.: A new constraint programming approach for the orthogonal packing problem. Comput. Oper. Res. 35, 944–959 (2008).", "https://wiki.bordeaux.inria.fr/realopt/pmwiki.php/Project/SoftwareAlgoKP"],

  ["CLASS", "<ul><li>CLASS [1-6] Berkey, J.O., Wang, P.Y.: Two-Dimensional Finite Bin-Packing Algorithms. J. Oper. Res. Soc. 38, 423 (1987).</li><li>CLASS [7-10] Martello, S., Vigo, D.: Exact Solution of the Two-Dimensional Finite Bin Packing Problem. Manage. Sci. 44, 388–399 (1998).</li><ul>", "http://or.dei.unibo.it/library/two-dimensional-bin-packing-problem"],

  ["CMWX", "Cintra, G.F., Miyazawa, F.K., Wakabayashi, Y., Xavier, E.C.: Algorithms for two-dimensional cutting stock and strip packing problems using dynamic programming and column generation. Eur. J. Oper. Res. 191, 61–85 (2008)."],

  ["CUI", "Cui, Y.: Heuristic and exact algorithms for generating homogenous constrained three-staged cutting patterns. Comput. Oper. Res. 35, 212–225 (2008).", "http://www.gxnu.edu.cn/Personal/ydcui/English/Paper024.htm"],

  ["CWL", "Cui, Y., Wang, Z., Li, J.: Exact and heuristic algorithms for staged cutting problems. Proc. Inst. Mech. Eng. Part B J. Eng. Manuf. 219, 201–207 (2005).", "http://www.gxnu.edu.cn/Personal/ydcui/English/Paper006.htm"],

  ["CY", "Cui, Y., Yang, Y.: A recursive branch-and-bound algorithm for constrained homogenous T-shape cutting patterns. Math. Comput. Model. 54, 1320–1333 (2011).", "http://www.gxnu.edu.cn/Personal/ydcui/English/Paper045.htm"],

  ["CZ", "Cui, Y., Zhao, Z.: Heuristic for the rectangular two-dimensional single stock size cutting stock problem with two-staged patterns. Eur. J. Oper. Res. 231, 288–298 (2013)."],

  ["D", "<ul><li>[D1-2] Ratanapan, K., Dagli, C.H.: An object-based evolutionary algorithm for solving rectangular piece nesting problems. In: 1997 IEEE International Conference on Systems, Man, and Cybernetics. Computational Cybernetics and Simulation. pp. 989–994. IEEE (1997).</li><li>[D3] Ratanapan, K., Dagli, C.H.: An object-based evolutionary algorithm: the nesting solution. In: 1998 IEEE International Conference on Evolutionary Computation Proceedings. IEEE World Congress on Computational Intelligence (Cat. No.98TH8360). pp. 581–586. IEEE (1998).</li><li>[D4] Dagli, C.H., Poshyanonda, P.: New approaches to nesting rectangular patterns. J. Intell. Manuf. 8, 177–190 (1997).</li></ul>", "https://paginas.fe.up.pt/~esicup/datasets"],

  ["DOWSLAND", "Dowsland, K.A.: The Three-Dimensional Pallet Chart : An Analysis of the Factors Affecting the Set of Feasible Layouts for a Class of Two-Dimensional Packing Problems. J. Oper. Res. Soc. 35, 895–905 (1984)."],

  ["EL-AAL", "El-Aal, R.M.S.A.: An interactive technique for the cutting stock problem with multiple objectives. Eur. J. Oper. Res. 78, 304–317 (1994)."],

  ["EP2", "Egeblad, J., Pisinger, D.: Heuristic approaches for the two- and three-dimensional knapsack packing problem. Comput. Oper. Res. 36, 1026–1049 (2009).", "http://www.diku.dk/~pisinger/codes.html"],

  ["FHZ", "Fayard, D., Hifi, M., Zissimopoulos, V.: An efficient approach for large-scale two-dimensional guillotine cutting stock problems. J. Oper. Res. Soc. 49, 1270–1277 (1998).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["FO", "Ferreira, E., Oliveira, J.F.: A note on Fekete and Schepers’ algorithm for the non-guillotinable two-dimensional packing problem. 2–5 (2005)."],

  ["GARD", "Gardner, M.: Mathematical Games. The problem of Mrs. Perkins’ quilt, and answers to last month’s puzzles. Sci. Am. 2, (1966).", "http://or.dei.unibo.it/library/orthogonal-stock-cutting-problems"],

  ["GCUT", "Beasley, J.E.: Algorithms for Unconstrained Two-Dimensional Guillotine Cutting. J. Oper. Res. Soc. 36, 297–306 (1985).", "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/gcutinfo.html"],

  ["HADCHR", "Hadjiconstantinou, E., Christofides, N.: An exact algorithm for general, orthogonal, two-dimensional knapsack problems. Eur. J. Oper. Res. 83, 39–56 (1995)."],

  ["HERZ", "Herz, J.: Recursive Computational Procedure for Two-dimensional Stock Cutting. IBM J. Res. Dev. 16, 462–469 (1972)."],

  ["HIFI1997a", "M. Hifi, “Hifi, M.: The DH/KD algorithm: a hybrid approach for unconstrained two-dimensional cutting problems. Eur. J. Oper. Res. 97, 41–52 (1997).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["HIFI1997b", "Hifi, M.: An improvement of Viswanathan and Bagchi’s exact algorithm for constrained two-dimensional cutting stock. Comput. Oper. Res. 24, 727–736 (1997).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["HIFI2001", "Hifi, M.: Exact algorithms for large-scale unconstrained two and three staged cutting problems. Comput. Optim. Appl. 18, 63–88 (2001).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["HOPPER", "Hopper, E.: Two-dimensional Packing utilising Evolutionary Algorithms and other Meta-Heuristic Methods, (2000).", "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/stripinfo.html"],

  ["HT2001a", "Hopper, E., Turton, B.C.H.: An empirical investigation of meta-heuristic and heuristic algorithms for a 2D packing problem. Eur. J. Oper. Res. 128, 34–57 (2001)."],

  ["HT2001b", "Hopper, E., Turton, B.C.H.: An empirical study of meta-heuristics applied to 2D rectangular bin packing. Stud. Inform. Universalis. 2, 77–106 (2001).", "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/binpacktwoinfo.html"],

  ["HZ1", "Hifi, M., Zissimopoulos, V.: Une amélioration de l’algorithme récursif de Herz pour le problème de découpe à deux dimensions. RAIRO, Rech. Opérationnelle. 30, 111–125 (1996).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["HZ2", "Hifi, M., Zissimopoulos, V.: A recursive exact algorithm for weighted two-dimensional cutting. Eur. J. Oper. Res. 91, 553–564 (1996)."],

  ["IS", "Israni, S., Sanders, J.: Two-dimensional cutting stock problem research: A review and a new rectangular layout algorithm. J. Manuf. Syst. 1, 169–182 (1982)."],

  ["IYUAI", "Imahori, S., Yagiura, M., Umetani, S., Adachi, S., Ibaraki, T.: Local search algorithms for the two-dimensional cutting stock problem with a given number of different patterns. Oper. Res. Comput. Sci. Interfaces Ser. 32, (2005).", "http://www.simplex.t.u-tokyo.ac.jp/~imahori/packing/instance.html#2dcsp"],

  ["JAKOBS", "Jakobs, S.: On genetic algorithms for the packing of polygons. Eur. J. Oper. Res. 88, 165–181 (1996)."],

  ["JLSL", "Jiang, J.Q., Liang, Y.C., Shi, X.H., Lee, H.P.: A Hybrid Algorithm Based on PSO and SA and Its Application for Two-Dimensional Non-guillotine Cutting Stock Problem. In: Lecture Notes in Computer Science. pp. 666–669. IEEE (2004)."],

  ["KORF", "Korf, R.E., Moffitt, M.D., Pollack, M.E.: Optimal rectangle packing. Ann. Oper. Res. 179, 261–295 (2010).", "http://or.dei.unibo.it/library/orthogonal-stock-cutting-problems"],

  ["KR", "Kröger, B.: Guillotineable bin packing: A genetic approach. Eur. J. Oper. Res. 84, 645–661 (1995).", "http://www.computational-logistics.org/orlib/topic/2D%20Guillotine%20Strip%20Packing%20Problem/"],

  ["LC", "Lai, K.K., Chan, J.W.M.: Developing a simulated annealing algorithm for the cutting stock problem. Comput. Ind. Eng. 32, 115–127 (1997)."],

  ["LCT", "Leung, T.W., Chan, C.K., Troutt, M.D.: Application of a mixed simulated annealing-genetic algorithm heuristic for the two-dimensional orthogonal packing problem. Eur. J. Oper. Res. 145, 530–542 (2003)."],

  ["LYT", "Leung, T.W., Yung, C.H., Troutt, M.D.: Applications of genetic search and simulated annealing to the two-dimensional non-guillotine cutting stock problem. Comput. Ind. Eng. 40, 201–214 (2001)."],

  ["MA", "Morabito, R., Arenales, M.N.: Optimizing the cutting of stock plates in a furniture company. Int. J. Prod. Res. 38, 2725–2742 (2000)."],

  ["MAA", "Morabito, R., Arenales, M.N., Arcaro, V.F.: An and-or-graph approach for two-dimensional cutting problems. Eur. J. Oper. Res. 58, 263–271 (1992).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["MB", "Pisinger, D., Sigurd, M.: The two-dimensional bin packing problem with variable bin sizes and costs. Discret. Optim. 2, 154–167 (2005).", "https://paginas.fe.up.pt/~esicup/datasets"],

  ["MB2D", "Mack, D., Bortfeldt, A.: A heuristic for solving large bin packing problems in two and three dimensions. Cent. Eur. J. Oper. Res. 20, 337–354 (2012).", "http://www.fernuni-hagen.de/evis/service/downloads.shtml"],

  ["MG", "Morabito, R., Garcia, V.: The cutting stock problem in a hardboard industry: A case study. Comput. Oper. Res. (1998)."],

  ["MP", "Morabito, R., Pureza, V.: A heuristic approach based on dynamic programming and and/or-graph search for the constrained two-dimensional guillotine cutting problem. Ann. Oper. Res. 179, 1–25 (2010).", "https://paginas.fe.up.pt/~esicup/datasets"],

  ["MWV", "Mumford-Valenzuela, C.L., Vick, J., Wang, P.Y.: Heuristics for large strip packing problems with guillotine patterns: An empirical study. In: Metaheuristics: computer decision-making. pp. 501–522 (2004).", "http://www.vuuren.co.za/main.php"],

  ["NGCUT", "Beasley, J.E.: An Exact Two-Dimensional Non-Guillotine Cutting Tree Search Procedure. Oper. Res. 36, 49–64 (1985).", "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/ngcutinfo.html"],

  ["NGCUTAP", "Beasley, J.E.: A population heuristic for constrained two-dimensional non-guillotine cutting. Eur. J. Oper. Res. 156, 601–627 (2004).", "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/ngcutinfo.html"],

  ["NGCUTCON", "Beasley, J.E.: A population heuristic for constrained two-dimensional non-guillotine cutting. Eur. J. Oper. Res. 156, 601–627 (2004).", "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/ngcutinfo.html"],

  ["NGCUTFS", "Beasley, J.E.: A population heuristic for constrained two-dimensional non-guillotine cutting. Eur. J. Oper. Res. 156, 601–627 (2004).", "http://people.brunel.ac.uk/~mastjjb/jeb/orlib/ngcutinfo.html"],

  ["NHU", "Novianingsih, K., Hadianti, R., Uttunggadewa, S.: Column generation technique for solving two-dimensional cutting stock problems: method of stripe approach. J. Indones. Math. Soc. 13, 161–172 (2012)."],

  ["OF", "Oliveira, J.F., Ferreira, J.S.: An improved version of Wang’s algorithm for two-dimensional cutting problems. Eur. J. Oper. Res. 44, 256–266 (1990).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/2Dcutting/"],

  ["OKP", "Fekete, S.P., Schepers, J.: On more-dimensional packing III: Exact Algorithms. (2000)."],

  ["ONV", "Ortmann, F.G., Ntene, N., van Vuuren, J.H.: New and improved level heuristics for the rectangular strip packing and variable-sized bin packing problems. Eur. J. Oper. Res. 203, 306–315 (2010).", "http://www.vuuren.co.za/main.php"],

  ["PGD", "Parada, V., Gómes de Alvarenga, A., de Diego, J.: Exact solutions for constrained two-dimensional cutting problems. Eur. J. Oper. Res. 84, 633–644 (1995)."],

  ["PO", "Pinto, E., Oliveira, J.F.: Algorithm based on graphs for the non-guillotinable two-dimensional packing problem. In: Second ESICUP Meeting (2005).", "http://www.computational-logistics.org/orlib/topic/2D%20Strip%20Packing/"],

  ["RAND", "Martello, S., Monaci, M.: Models and algorithms for packing rectangles into the smallest square. Comput. Oper. Res. 63, 161–171 (2015).", "http://or.dei.unibo.it/library/orthogonal-stock-cutting-problems"],

  ["RSS", "Russo, M., Sforza, A., Sterle, C.: An exact dynamic programming algorithm for large-scale unconstrained two-dimensional guillotine cutting problems. Comput. Oper. Res. 50, 97–114 (2014).", "https://paginas.fe.up.pt/~esicup/files/datasets"],

  ["SCP", "Hifi, M.: Exact algorithms for the guillotine strip cutting/packing problem. Comput. Oper. Res. 25, 925–940 (1998).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/Strip-cutting/"],

  ["SCPL", "Hifi, M.: The Strip Cutting/Packing Problem: Incremental Substrip Algorithms-Based Heuristics. Pesqui. Operacional, Spec. Issue Cut. Pack. Probl. 19, 169–188 (1999).", "ftp://cermsem.univ-paris1.fr/pub/CERMSEM/hifi/Strip-cutting/"],

  ["SPIEKSMA", "<ul><li>Spieksma, F.C.R.: Branch-and-bound algorithm for the two-dimensional vector packing problem. Comput. Oper. Res. 21, 19–25 (1994).</li><li>Caprara, A., Toth, P.: Lower bounds and algorithms for the 2-dimensional vector packing problem. Discret. Appl. Math. 111, 231–262 (2001).</li></ul>"],

  ["SS", "Skalbeck, B.A., Schultz, H.K.: Reducing Trim Waste in Panel Cutting Using Integer and Linear Programming. Proc. West. AIDS Conf. 145–147 (1976)."],

  ["SSOOYKI", "Shiomi, Y., Sugi, M., Ota, J., Okubo, T., Yamamoto, M., Kojima, H., Inoue, K.: The solution of 2-dimensional rectangular cutting stock problem considering cutting process. Proc. 3rd IEEE Int. Conf. Autom. Sci. Eng. IEEE CASE 2007. 140–145 (2007)."],

  ["STS", "Tschöke, S., Holthöfer, N.: A New Parallel Approach to the Constrained Two-Dimensional Cutting Stock Problem. In: Workshop on Algorithms for Irregularly Structured Problems. pp. 285–299 (1995)."],

  ["TEST", "Yanasse, H.H., Zinober, A.S.I., Harris, R.G.: Two-dimensional cutting stock with multiple stock sizes. J. Oper. Res. Soc. 42, 673–683 (1991)."],

  ["VAG", "Vianna, A.C.G., Arenales, M.N., Gramani, M.C.N.: Two-Stage and Constrained Two-Dimensional Guillotine Cutting Problems. USP. 1–28 (2003)."],

  ["VASSILIADIS", "Vassiliadis, V.S.: Two-dimensional stock cutting and rectangle packing: Binary tree model representation for local search optimization methods. J. Food Eng. 70, 257–268 (2005)."],

  ["VENKATESWARLU", "Venkateswarlu, P.: The trim-loss problem in a wooden container manufacturing company. J. Manuf. Syst. 20, 166–176 (2001)."],

  ["WANG", "Wang, P.Y.: Two Algorithms for Constrained Two-Dimensional Cutting Stock Problems. Oper. Res. 31, 573–586 (1983).", "https://paginas.fe.up.pt/~esicup/datasets"],

  ["WV", "Wang, P.Y., Valenzuela, C.L.: Data set generation for rectangular placement problems. Eur. J. Oper. Res. 134, 378–391 (2001).", "https://users.cs.cf.ac.uk/C.L.Mumford/Research%20Topics/layout/Outline.html"],

  ["WVINT", "Wei, L., Oon, W.C., Zhu, W., Lim, A.: A skyline heuristic for the 2D rectangular packing and strip packing problems. Eur. J. Oper. Res. 215, 337–346 (2011).", "http://www.computational-logistics.org/orlib/topic/2D%20Strip%20Packing/"],

  ["WWD", "Wan, J., Wu, Y., Dai, H.: A Pattern Combination Based Approach to Two-Dimensional Cutting Stock Problem. In: Advances in Natural Computation: First International Conference, ICNC 2005, Changsha, China, August 27-29, 2005, Proceedings, Part III. pp. 332–336 (2005)."],

  ["ZDF", "<ul><li>[ZDF1-9] Zhang, D., Wei, L., Chen, Q., & Leung, S. C. H. (2013). A Binary Search Heuristic Algorithm based on Randomized Local Search for the Rectangular Strip Packing Problem. INFORMS Journal on Computing, 25(2), 332–345.</li><li>[ZDF10-16] Leung, S.C.H., Zhang, D.: A fast layer-based heuristic for non-guillotine strip packing. Expert Syst. Appl. 38, 13032–13042 (2011).</li></ul>", "https://paginas.fe.up.pt/~esicup/files/datasets"],

];