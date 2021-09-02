import Header from "./components/base/Header";
import Cities from "./components/Cities";
import Layout from "./components/layout/LayoutPrimary";
import './styles/style.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import CityBackground from './components/city/CityBackground'
import City from './components/city/City'
import CityInfo from "./components/city/CityInfo";

function App() {
  return (
    <div className="App">
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Cities/>
            </Route>

            <Route path="/oslo">
              <CityBackground city="Oslo"/>
              <City 
              title="Oslo"
              description1="The capital of Norway"/>
              <City
              description1="Oslo provides a lot of opportunities for various different activities."
              align="right"/>
              <City
              description1="Here, you can experience world-class food, music, art or if you are a fit person, you can also participate in many different sport events."/>
              <City
              description1="This is a perfect city to combine urban city life with nature based fun."
              align="right"/>
              <City
              description1="You can enjoy quiet moments in the forest..."/>
              <City
              description1="and a refreshing hiking in the fjord."
              align="right"/>
              <City
              description1="You can see beautiful, traditional buildings..."/>
              <City
              description1="or modern architecture in the city."
              align="right"/>
              <CityInfo 
              title1="Metropolitan Oslo"
              population={1056180}
              description1="The capital of Oslo is one of Europe’s fastest-growing cities. International media is constantly writing about Oslo’s innovative architecture, museums, and neighbourhoods, as well as everything that moves on the food, fashion, art, and music scenes."
              title2="A green capital"
              description2="Oslo is a green city and was awarded the prestigious title European Green Capital in 2019. More than half of the municipality of Oslo is covered by forests and parks, and the fjord extends all the way to the city centre. The centre itself is becoming increasingly car-free and easy to explore on foot or by bike. An efficient public transport system makes the rest of the city easily accessible."/>
            </Route>

            <Route path="/bergen">
            <CityBackground city="Bergen"/>
              <City 
              title="Bergen"
              description1="The fjord capital"/>
              <City
              description1="The hearth of the fjords is one of Bergens well-known nicknames"
              align="right"/>
              <City
              description1="Even though Bergen is the second-largest city in Norway, it has the vibe of a small town, packed with charm and urban character."/>
              <City
              description1="You can see houses clinging to the hillsides..."
              align="right"/>
              <City
              description1="...narrow cobblestone alleys..."/>
              <City
              description1="...and world-famous attractions. Like the picturesque wharf with several old, wooden buildings standing tall in different colours."
              align="right"/>
              <City
              description1="The UNESCO World Heritage site Bryggen, 'The Hanseatic Wharf', is the most obvious remnant from the time Bergen used to be the centre of trade between Norway and the rest of Europe."/>
              <City
              description1="Today, the wharf houses a museum, shops, galleries, and restaurants, and is a focal point for both locals and visitors."
              align="right"/>
              <CityInfo 
              title1="Bergen and the western fjords"
              population={277378}
              description1="Historical World Heritage sites meet innovative fashion, trendy restaurants, and a progressive music scene in Norway’s second-largest city, Bergen. Visit some of the country’s top museums like KODE art museums and composer homes, get lost in squiggly cobblestone streets, and experience the city from above at one of the seven surrounding mountain tops. Bergen is the gateway to some of Norway’s most famous fjords, including the Sognefjord, Norway’s longest and deepest fjord, in the north, and the Hardangerfjord – where you’ll find the famous mountain plateau Trolltunga – in the south. Many of the fjords have sidearms that are at least as beautiful, but far less busy. Travel to the fjord village Flåm with the Flåm Line, voted one of the world’s most beautiful train journeys. For outdoor fun in epic surroundings, visit Voss and Nordfjord."
              />
            </Route>

            <Route path="/trondheim">
            <CityBackground city="Trondheim"/>
              <City 
              title="Trondheim"
              description1="The Trøndelag region is the very heart of Norway. Placed right in the middle, with veins stretching out in every possible direction. From here, you can travel to the wild west. The Arctic north. The deep east. Or the happy south."/>
              <City
              description1="Or you could just stay. For this is the perfect place to learn how to master the noble art of the Norwegian favourite pastime –'kos'."
              align="right"/>
              <City
              description1="Time just seems to pass a bit slower here, and many of the locals appear to move at a more laid-back pace. In Trøndelag, 'kos' is just a way of life. Like at the cafe Baklandet Skydsstation."/>
              <City
              description1="But what is 'kos' exactly?"
              align="right"/>
              <City
              description1="It can be the time you spend with your friends exploring the old wooden neighbourhood of Bakklandet in the pulsating student town of Trondheim. The region’s main city is the very capital of 'kos'."/>
              <City
              description1="And also of jazz, cool contemporary art and funky festivals, cheesemaking monks and guys with big moustaches called 'trønderbart'"
              align="right"/>
              <City
              description1="Trondheim is actually an incubator for cutting edge technology. Just take a look at this iconic landmark designed by Snøhetta."/>
              <City
              description1="Powerhouse is one of the most environmentally-friendly buildings in the world!"
              align="right"/>
              <CityInfo 
              title1="Trondheim and Trøndelag"
              population={205332}
              description1="The Trøndelag region, situated right in the middle of Norway, attracts hardcore history buffs, devoted foodies, and active nature explores alike. Go fishing, cycling, or skiing, or hike one of the nine pilgrim paths the St. Olav Ways, which all lead to the stunning Nidaros Cathedral in Trondheim. The lively student town of Trondheim is the region’s capital, known as the Home of Nordic flavours. Indulge in gastronomical experiences ranging from fancy Michelin restaurants to hip food bars and cosy coffee shops. Follow the smell of fresh local produce on the scenic detour The Golden Road in Innherred, and travel back in time in the UNESCO listed mining town of Røros. In the Dovrefjell mountains, you can catch a glimpse of a beautiful beast – the musk oxen."
              />
            </Route>

            <Route path="/tromso">
            <CityBackground city="Tromso"/>
              <City 
              title="Tromso"
              description1="Where your Arctic adventure begins"/>
              <City
              description1="See how lady Aurora uses this Arctic city as a dance floor!"
              align="right"/>
              <City
              description1="Or chase the northern lights with a local guide."/>
              <City
              description1="Just remember to pack warm clothes, because you will never stop staring and never stop being amazed."
              align="right"/>
              <City
              description1="In summer, you will be astonished by a different light: the midnight sun and it’s the perfect excuse to stay out all night."/>
              <City
              description1="You see, the sun never sets above the Arctic Circle. This makes Tromsø, also known as the Arctic Capital, your playground 24 hours a day – and it's a certified Sustainable Destination as well!"
              align="right"/>
              <City
              description1="Say “hello” to the seals in Polaria or cherish the town’s history as a starting point for countless Arctic expeditions at the Polar Museum"/>
              <City
              description1="For panoramic views of the city, ride the cable car up to Mount Storsteinen..."
              align="right"/>
              <City
              description1="or get there by climbing the 1200 stone steps up the Sherpa staircase."/>
              <CityInfo 
              title1="Tromsø and the land of the northern lights"
              population={91590}
              description1="The capital of the Arctic, Tromsø, is located right in the middle of Northern Norway. If your bucket list includes northern lights, whale watching, midnight sun, and epic nature adventures, this is where you want to go. Enjoy superb conditions for ski touring and hiking in the Lyngenfjord region, experience the Sami culture in towns like Karasjok and Alta, and enter the northernmost point of Europe at the North Cape. In the eastern part of this vast region, you’ll find the Varanger peninsula, which is a bird watcher’s paradise. Go king crab fishing and dog sledging in Kirkenes, where you also can spend a night at an ice hotel. In the areas surrounding Tromsø, several islands are waiting to be explored, including Senja, Kvaløya, and Sommarøy."
              />
            </Route>

            <Route path="/geirangerfjord">
            <CityBackground city="Geirangerfjord"/>
              <City 
              title="Geirangerfjord"
              description1="The deep blue UNESCO-protected Geirangerfjord is surrounded by majestic, snow-covered mountain peaks, wild waterfalls and lush, green vegetation."/>
              <City
              description1="You would have to be exceptionally blasé if you failed to be impressed by this astounding creation of Mother Nature, emphasised by the will of man to maintain a foothold on the steep mountain sides and glean a living here."
              align="right"/>
              <City
              description1="Impressive waterfalls cast cascades of thundering water from almost vertical mountain sides."/>
              <City
              description1="For nature lovers, the Geirangerfjord has plenty to offer."
              align="right"/>
              <City
              description1="Experience the fjords and the waterfalls from one of the many available sightseeing trips, go hiking in stunning surroundings or experience the fjords from a new perspective in a kayak."/>
              <City
              description1="Other popular activities in the area include fishing, rafting and cycling."
              align="right"/>
              <City
              description1="Geiranger has been certified as a Sustainable Destination, a seal of approval given to destinations that work systematically to reduce the negative impact of tourism."/>
              <City
              description1="In addition to providing visitors with enjoyable experiences, Geiranger wishes to preserve the local nature, culture and environment, strengthen social values, and be economically viable."
              align="right"/>
              <CityInfo 
              title1="The Geirangerfjord and the Northwest"
              population={250}
              description1="The Seven Sisters and numerous other waterfalls run down steep mountainsides that end in the clear, blue water of the UNESCO site the Geirangerfjord, Norway’s most famous fjord. The picturesque art nouveau town Ålesund is an ideal starting point for a fjord adventure. The Northwest is situated in the northern part of Fjord Norway and attracts avowed outdoor buffs all year round. The mountaineering capital of Åndalsnes is an ideal base here, as it is surrounded by staggering peaks and situated only a short distance from world-famous attractions like the Trollstigen mountain road and The Atlantic Road. Åndalsnes is the endpoint of the Rauma Line, voted one of the world’s most beautiful train journeys. Northwest’s is also home to the jazz town Molde and the “clipfish capital” Kristiansund."
              description2="The area’s unique natural surroundings were created during a succession of ice ages, when glaciers carved out deep fjords and shaped the high mountains – and it is not a coincidence that the Geirangerfjord today often appears on lists of the most spectacular places in the world."/>
            </Route>
          </Switch>
        </Router>

      </Layout>
    </div>
  );
}

export default App;
