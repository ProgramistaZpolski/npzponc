// Vanilla JS
// ECMASCRIPT 3.1
// GŁUPIE KOMPUTERY Z WINXP I WIN98 W SZKOLE
// MUSZE PISAĆ KOD KTÓRY MA DZIAŁAĆ W JAKIEJŚ STRASZNIEJ STAREJ PRZEGLADARKI
// SEND HELP
// TO JEST PRAWDZIWE WOŁANIE PO POMOC
// KIEDY MOJA SZKOŁA PRZESTANIE KORZYSTAĆ Z NETSCAPE NAVIGATOR
// CZASAMI MAM CHĘĆ KUPIĆ LICENCJĘ NA ADOBE FLASH CS6 ZA 1000zł
// TYLKO PO TO ŻEBY SIĘ NIE BAWIĆ W PISANIE JS NA JAKIEŚ STARE PRZEGLĄDARKI
// TYLKO JEDEN PLIK SWF DAĆ

class VanillaJS {
    constructor(obecnyPoziomDepresji, wersjaNetscapeNavigator) {
      this.obecnyPoziomDepresji = obecnyPoziomDepresji;
      this.wersjaNetscapeNavigator = wersjaNetscapeNavigator;
    }
    get area() {
        return this.calc();
      }
      calc() {
        return this.obecnyPoziomDepresji * this.wersjaNetscapeNavigator;
      }
  }
  // zastąp 156 swoim obecnym poziomem depresji
  // zastąp 9 wersją netscape navigator na którą musisz pisać strony internetowe
  const square = new VanillaJS(156, 9);
  alert("Twój poziom depresji po napisaniu kolejnej strony na Netscape Navigator " + square.wersjaNetscapeNavigator + " będzie wynosił " + square.calc());
