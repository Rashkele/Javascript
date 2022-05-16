/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

function Movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = function wasExpensive() {wasExpensive = budget > 100000000 ? true : false};
  }

  const filmas = new Movie("Schindler's List", "Steven Spielberg", 5000000);
  console.log(filmas);