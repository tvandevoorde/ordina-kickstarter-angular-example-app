import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../models';

export class InMemoryProductsService implements InMemoryDbService {

  constructor() {
  }

  createDb(): { products: Product[] } {
    const products: Product[] = [
      { id: 1, name: 'Sony PlayStation 4 Pro 1 TB', description: `De PlayStation 4 Pro is er voor serieuze gamers die elke dag de beste
      graphics en prestaties verwachten. De Pro is namelijk 2x krachtiger dan een PS4 Slim. Hierdoor speel je games in 4K of kies je voor
      nog vloeiender beeld. Ook ziet het beeld er op de PSVR er een stuk beter uit. Heb je een luxe gaming headset of surround sound
      geluidssyteem, dan sluit je deze direct aan op de optische audio poort. Als een 4K tv nog op je verlanglijstje staat, dan zorgt de
      Pro ook bij 1080p tv's en monitoren voor vloeiender beeld met meer zichtbare details.` },
      { id: 2, name: 'Sony PlayStation 4 Slim 500 GB', description: `Of je nou in de huiskamer speelt of op je kamer, met een compacte
      PlayStation 4 Slim speel je de nieuwste games als FIFA, F1 racing en Call of Duty. De stijlvolle PS4 Slim is kleiner, dunner en
      zuiniger dan een PS4 pro, zodat je hem zonder overlast in je interieur verwerkt. Gamen, Blu-ray films kijken of spotify streamen, met
      de PS4 Slim doe je het allemaal met één apparaat.` },
      { id: 3, name: 'Nintendo Switch', description: `De Nintendo Switch is een combinatie van de traditionele console in de huiskamer en
      een handheld console voor onderweg. De Switch is namelijk op 3 verschillende manieren te gebruiken. Plaats de Switch in het docking
      station en je speelt je games op de grote tv in de huiskamer. Gebruik je de console onderweg? Dan speel je met de controllers aan
      weerszijde van het scherm van 6.2 inch, vergelijkbaar met de Wii U Gamepad. Koppel de 2 joy-con controllers los en je speelt met zijn
      tweetjes, elk met één van de controllers. Beschik je over meer dan 2 controllers, dan speel je met maximaal 4 spelers op 1 Nintendo
      Switch.` },
      { id: 4, name: 'Xbox One X 1TB', description: `Met de Xbox One X 1TB ligt de wereld van het console gamen aan jouw voeten. Hoewel het
      een krachtig beest is, maakt hij nauwelijks geluid dankzij de ingebouwde waterkoeling. Met de meegeleverde, draadloze controller ga
      jij direct aan de slag en heb je geen last van bekabeling door je woonkamer.` },
      { id: 5, name: 'Microsoft Xbox One S 1TB', description: `Met de Xbox One S 1TB ga je meteen aan de slag met de drie meegeleverde
      digitale games. Ook heb je een maand lang toegang tot een bibliotheek van meer dan 100 top games voor Xbox One en Xbox 360 met Xbox
      Live Gold. Met de Xbox One S all digital met 4K video streaming betreed jij goed voorbereid de battleground. Dankzij het strakke
      design is de One S all digital de meest compacte Xbox ooit. Met de meegeleverde, draadloze controller ga jij direct aan de slag en
      heb je geen last van bekabeling door je woonkamer. Als je het gamen even zat bent, kijk je met deze Xbox One S all digital ook
      gewoon films in 4K.` },
    ];
    return { products };
  }

  genId<T extends { id: any }>(collection: T[], collectionName: string): any {
    return collection.reduce((prev, curr) => {
      return (curr.id + 1) || 0;
    }, 1);
  }

}
