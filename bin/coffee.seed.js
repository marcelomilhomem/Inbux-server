const mongoose = require("mongoose");

const Coffee = require("../models/Coffee.model");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://macelo:ironHack@cluster0.ohkah.mongodb.net/Inbux?retryWrites=true&w=majority";

const coffeesArr = [
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Sumatra-Package1-Dark-Roast-C10-RESIZED.png.webp?itok=V21a9R8Q",
    detailImg:
      "https://files.worldwildlife.org/wwfcmsprod/images/Sumatran_tiger_camera_trap_3_/story_full_width/4jfst4dg9z_IMG_0058.JPG",
    title: "Sumatra",
    origin: "Asia Pacific, Sumatra",
    description: `To understand the challenge of describing Indonesia, consider its topography. The country is comprised of 17,000 islands. Volcanoes, more than 300 in total and some still active, dot the landscape. It is a nation of varied communities that speak more than 350 different languages with Ancient Hindu and Buddhist temples as well as Muslim mosques throughout the country. 
     Thick bamboo groves abound, as well as rice paddies, homes on stilts, dense jungle and tigers. The scent of cloves and numerous spices fills the air. And the mystery of Indonesia is perhaps best represented by one of its oldest inhabitants - the Komodo dragon, the world's largest lizard.
     This is the backdrop for the most recent Starbucks Origin Experience for partners (employees) in Sumatra - an island in western Indonesia that is the sixth largest in the world with a population that tops 50 million. Through the Origin Experience, partners gain an understanding and appreciation for the passion that goes into each cup of coffee Starbucks sells.
     “Unique semi-washed processing isn't the only thing that sets this origin apart, though that aspect is fascinating. It's the people and culture that carry the romance of coffee,” said Kelly Goodejohn, Starbucks director of Ethical Sourcing. 
      Sumatra is the third largest producer of coffee in the world (following Brazil and Vietnam) of both Arabica and Robusta coffee. Starbucks only sources the highest quality Arabica coffee. Even for it's production size, Goodejohn said coffee farming in Sumatra is reliant on smallholder farms that often grow coffee trees among other crops such as eggplant or cabbage. The effort is worth the end result. Coffee from Indonesia provides the earthy flavors that anchor many of Starbucks blends, and are compelling enough to be sold as single-origin coffees. Sumatra is the source of one of the most popular Starbucks single-origin coffee. 
     “Sumatra's flavor profile cannot be replicated anywhere in the world. The answer to what makes this core coffee so special is simple - the people,” said Dan Jensen, a partner who is sharing a photo essay from coffee cherry to cup.`,
    roast: "Dark",
    processing: "Semi-Washed",
    body: "Bold",
    acidity: "Low",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Caffe-Veorna-Package1-Dark-Roast-C10-RESIZED.png.webp?itok=v4ujfl3E",
    detailImg:
      "https://images.chickadvisor.com/item/33092/original/92d8ee60730316c02c847a4049ee536b.jpg",
    title: "Caffé Verona",
    origin: "Asia Pacific and Latin America",
    description: `This is a coffee of one true love, and three names. Starbucks created Caffè Verona® for a Seattle restaurant to be paired with a luscious chocolate cake dessert. In 1975, it was named Jake's Blend. Soon customers started asking for the unique coffee in Starbucks stores.
    When Starbucks began blending the coffee for customers it was known simply as 80/20 Blend. The coffee's second name - 80/20 Blend - refers to the initial blending recipe: 80% Yukon Blend® and 20% Starbucks® Italian Roast.  With so much love for this special coffee, it's fitting that it was later named after Verona, Italy which was the setting for Shakespeare's Romeo and Juliet.   
    For years, the design on the bag of Caffè Verona had photo of a romantic bridge, presumably in Italy. In fact, the bridge was inspired by a structure in Seattle at the University of Washington Arboretum. 
    Caffè Verona is often thought of as a “crowd pleaser” or “dinner party coffee.” It has become both a partner and customer favorite and is always the first to come to mind as a coffee that pairs well with chocolate.`,
    roast: "Dark",
    processing: "Washed and Semi-Washed",
    body: "High",
    acidity: "Low",
    blend: true,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Espresso-Package1-Dark-Roast-C10-RESIZED.png.webp?itok=NBFldDUX",
    detailImg:
      "https://stories.starbucks.com/wp-content/uploads/2019/01/revisiting-espresso-roast-01-1.jpg",
    title: "Espresso Roast",
    origin: "Asia Pacific and Latin America",
    description: `Dave Olsen was the coffee guy.
    He created our Espresso Roast back in 1975. And even though times and palates have changed quite a bit since then, Espresso Roast tastes exactly the same as it did on day one. It has to. It's our core. It's where our heart is.
    Dave had his first experience with “real” espresso back in 1969 on an epic road trip from Montana to Texas (via Berkeley). He says he almost blew up his little stovetop espresso maker trying to pull the perfect shot. And once he did, there was no going back. Dave became obsessed with recreating that singular taste and experience.
    Inspired by the long tradition of coffee bars overseas, Dave went on to open Cafe Allegro in Seattle, where he brewed and sold the finest quality coffee he could. But it wasn't enough. He needed the ultimate espresso blend — the one that would take him back to the day he'd first discovered it.
    Fortunately, that's when Dave met the guys who had recently opened Starbucks®. They shared his intense curiosity and passion for coffee's possibilities. They also had a roastery. So when Dave decided he needed his own blend, he knew where to go.
    Dialing in the flavor took time, with countless trials required to get it just right. They played with blends, experimented with roasts, and finally made Dave's vision a reality. The soon-to-be-a-classic Espresso Roast was born. The obsession paid off. That same boldness and caramelly sweet finish has been the foundation of every espresso drink we've ever made. It balances exquisitely with milk in lattes, cappuccinos and flat whites. It stands boldly on its own in a doppio, and even with added water in an Americano. Espresso Roast never fails to deliver.
    Even now, 40 years later, we're still finding our way to that same end flavor with each new batch of beans. It's not easy. There's no school for what we do here — it's more like one long apprenticeship. I learned what I know from Andrew Linnemann, who learned it from Mary Williams, who learned it from Dave Olsen himself.
    Sometimes, I don't know how we make it happen. But now it's all on me to ensure Espresso Roast stays true to its proud history. And how will I know we have? Only when Dave visits the tasting room, pulls a shot, drinks it, and tells us we're still doing it right.
    No matter how many times we've earned Dave's seal of approval, I still get butterflies every time he walks in.`,
    roast: "Dark",
    processing: "Washed",
    body: "High",
    acidity: "Medium",
    blend: true,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Colombia-package1-Medium-Roast-C10-RESIZED.png.webp?itok=ISYX87w-",
    detailImg:
      "https://scontent.flis12-2.fna.fbcdn.net/v/t1.6435-9/45040663_276571996318238_2903991911842840576_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_ohc=s2ivgqrnHToAX8s3wK8&_nc_oc=AQlZZAw8P4jzijkZVOL_9Mkf8o23QXSHK0ovvqWfPSX_SW8yhoEEoG5TK8A5hcQ8QVg&_nc_ht=scontent.flis12-2.fna&oh=00_AT_x3FAtSUvq6DQJZqq557igW_ujmM71bLy-0k15_GJ-Hw&oe=62C782BF",
    title: "Colombia Nariño",
    origin: "Latin America, Colombia",
    description: `As its name implies, Starbucks® Colombia Nariño coffee comes from a region in southeast Colombia on the border with Ecuador known as Nariño. The Andes Mountain Range, which begins in southern Chile and Argentina, enters Colombia through Nariño and crosses the country from south to north.
    Nariño's unique characteristics create an exceptional coffee growing climate. The mountain area gets more than 70 inches of rain per year and plenty of sunshine. The region's volcanic soil has a high percentage of organic material.
    “For us, the heart of Colombian coffee sits in the mountains of Nariño,” said Leslie Wolford, Starbucks sr. green coffee specialist.  “Coffee grows at elevations higher than 6,500 feet, where warm tropical days and cool nights let the beans develop slowly.”
    “What I like the most about growing coffee is the love I put into harvesting and drying it,” said María de la Cruz, a Nariño coffee farmer.
    Growing up with parents who were coffee growers, she developed a passion for agriculture at an early age. De la Cruz and her husband acquired the “La Esperanza Farm” fourteen years ago.       “I do everything that needs to be done in order for the coffee to have good quality,” she said. “It's all about harvesting with love.”
    Colombia Nariño is a medium-bodied coffee with a juicy acidity, herbal notes and a walnut-like taste. Starbucks coffee educators describe it as being both “approachable and complex.” That makes Colombia Nariño coffee an ideal introduction to Starbucks® coffee and a favorite of coffee aficionados.`,
    roast: "Medium",
    processing: "Washed",
    body: "Soft",
    acidity: "High",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/PikePlace-Package1-Medium-Roast-C10-RESIZED.png.webp?itok=8IhYiikv",
    detailImg:
      "https://pbs.twimg.com/media/CVLMt_yXIAEPrnD?format=jpg&name=large",
    title: "Pike Place Roast",
    origin: "Latin America",
    description: `'We want to reinvent brewed coffee in America' Everyday brew, Pike Place Roast™.
    When Howard Schultz came back as chief executive officer in January 2008, Linnemann and his team were ready to unveil their breakthrough brew. Schultz recalled the moment in his book, “Onward: How Starbucks Fought for Its Life without Losing Its Soul.”
    “I put my nose to the cup and inhaled deeply before bringing the liquid to my lips,” Schultz said. “My eyes opened wide. The taste was significantly different from anything Starbucks had ever brought to market.”
    This blend was created using input from Starbucks customers and represents our 37 years of coffee roasting experience, knowledge and passion.  Taking the wide range of customer preferences as a guide, this everyday brew is a unique blend featuring Starbucks signature bold flavor with a smoother finish balanced by soft acidity and subtle, rich flavors of cocoa and toasted nuts. `,
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: true,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Kenya-package1-Medium-Roast-C10-RESIZED.png.webp?itok=s2Z4--gp",
    detailImg:
      "https://d2g6byanrj0o4m.cloudfront.net/images/1273/two_elephants.jpg",
    title: "Kenya",
    origin: "Africa",
    description: `And big - awash with a full-bodied juiciness that makes it instantly recognizable to its many, many fans. These qualities are all true of our Kenya coffee. 
    You can recognize Kenya through its tell-tale citrus flavors - grapefruit most often, but sometimes lemon and sometimes tart orange. There's a sparkle to this coffee, a bright acidity, that makes it so refreshing to drink. In fact, it's a terrific iced coffee on a hot summer day. `,
    roast: "Medium",
    processing: "Washed",
    body: "Full",
    acidity: "High",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Guatemala-Package1-Medium-Roast-C10-RESIZED.png.webp?itok=cPzOOetc",
    detailImg:
      "https://www.starbucks.co.th/stb-media/2020/08/Guatemala-1080.png",
    title: "Guatemala Antigua",
    origin: "Latin Amaerica, Guatemala",
    description: `Guatemala Antigua coffee comes from the volcanic valley of Antigua, one of many coffee-growing regions in Guatemala. The three volcanoes in the region create a valley that has the perfect coffee-growing conditions, which coffee farmers gladly utilize. With an elevation of around 4,000-6,000 feet above sea level and somewhat predictable weather patterns, the valley of Guatemala's Antigua creates one of the finest coffee beans in South America.
    Antigua is known for its complex flavor profile, especially when compared with other Central American beans. The coffee has a bright acidity combined with a surprisingly full body. This pairing of heavy and light qualities results in a coffee that is both refreshing and fulfilling.
    The Resplendent Quetzal, the bird in our Guatemala Coffee, as its national bird in 1871. The quetzal was chosen as the national bird from nearly 750 species of birds found in Guatemala, showing just how special it is. It is revered in the country, and its cultural importance dates way back to the Pre-Columbian Mesoamerican civilizations.`,
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Ethiopia-Package1-Medium-Roast-C10-RESIZED.png.webp?itok=Veij23To",
    detailImg:
      "https://i.pinimg.com/564x/52/bd/02/52bd02c9940fe610fe3c42f5b71095fe.jpg",
    title: "Ethiopia",
    origin: "Africa, Ethiopia",
    description: `Starbucks first whole bean packaged coffee available globally since the introduction of Starbucks® Blonde Roast two years ago, Ethiopia coffee celebrates Ethiopia's rich coffee tradition and delivers a taste in cup unlike any other coffee offered in Starbucks 42-year history.  This new coffee joins Starbucks selection of 20 core and 10 traditional and seasonal whole bean coffees offered at Starbucks retail stores nationwide.
    “We've taken great care in sourcing this coffee and applying the signature Starbucks roast to create a flavor profile that is both uniquely Starbucks and unique to specialty coffee,” said Craig Russell, senior vice president of Global Coffee at Starbucks. “We want to honor Ethiopia's rich coffee heritage while also giving our customers an exceptional flavor experience from the birthplace of coffee.”
    With its high elevation, rich volcanic soil, and more than 10,000 coffee varieties, Ethiopia produces some of the most extraordinary coffee in the world.
    “Starbucks fully-washed, medium-bodied Ethiopian coffee offers soft, velvety notes of dark chocolate, subtle hints of peppery spice, and sweet, mandarin-like citrus for a balanced and approachable taste in the cup,” said Anthony Carroll, Starbucks coffee development manager.
    Coffee was discovered in Africa more than 1,200 years ago and is where the first arabica beans were grown.* Today, coffee remains central to Ethiopian culture and heritage and is shared with family and friends through daily coffee ceremonies often occurring throughout the day lasting up to several hours.  Multiple steps in the ceremony include pan-roasting green coffee, grinding the roasted beans using a mortar and pestle, and preparing the roasted and ground coffee in a spherical-shaped pot called a jebena. The coffee is then served in traditional tasting cups.
    Ethiopia coffee is available at Starbucks® retail stores and starbucksstore.com starting today, September 24, for the suggested retail price of $13.95 U.S. per pound.  Customers can sample Ethiopia coffee at participating Starbucks® stores in the U.S. on National Coffee Day, September 29, and those who purchase a 1 lb. bag of Ethiopia whole bean will receive a commemorative Ethiopia tasting cup, while supplies last.  Ethiopia coffee will be available for customers to order as a brewed option through October 15, at select Starbucks stores.`,
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "High",
    blend: false,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/House-Blend-Package1-Medium-Roast-C10-RESIZED.png.webp?itok=ppwMMktg",
    detailImg:
      "https://www.starbucks.co.th/stb-media/2020/08/5-House-blend2-1080.png",
    title: "House Blend",
    origin: "Latin America",
    description: `This coffee is the first blend that has been created by Starbucks in 1971. This House Blend unique creation is a true ambassador of the Latin American Coffees. It brings out the distinctiveness characteristics of this growing region.
    House Blend is the Starbucks coffee that is most used in offices, restaurants or institutions which have a license to serve coffee.`,
    roast: "Medium",
    processing: "Washed",
    body: "Medium",
    acidity: "Medium",
    blend: true,
  },
  {
    coffeeImg:
      "https://www.starbucks.pt/sites/starbucks-pt/files/styles/c10_2_col_text_560x467/public/2020-07/Blonde-Espresso-Package1-Blonde-Roast-C10-RESIZED.png.webp?itok=SlS1xd8y",
    detailImg:
      "https://stories.starbucks.com/wp-content/uploads/2019/01/Blonde_Espresso_Chalkboard_Square_resized.jpg",
    title: "Blonde Roast",
    origin: "Latin America, Africa",
    description: `BOLD - SMOOTH - SUBTLY SWEET & ROASTY.
    SEATTLE, Tues., Jan. 9-  Today, Starbucks Coffee Company (NASDAQ: SBUX) announced the arrival of Starbucks® Blonde Espresso, marking the first time the company has introduced a new core espresso option in the United States in more than 40 years. Customers across the U.S. will now be able to order any handcrafted espresso beverage with their choice of “Starbucks® Signature” or “Starbucks® Blonde” espresso, including Starbucks Caffe Latte, Cappuccino, Flat White, Macchiato and Americano beverages.
    “Our partners are so passionate about their craft and now they get to help our customers discover and personalize the foundation of the beverage - an espresso that is either bold and rich or smooth and bright. We want every experience our customers have with us to be perfect for them” said Kris Engskov, president U.S. Retail for Starbucks.
    Demand for espresso beverages is on the rise with the National Coffee Association reporting in 2017 that nearly 25 percent of past-day daily coffee drinkers choose espresso*. Starbucks has offered a second espresso option in select international markets since 2013, including the debut of Starbucks® Blonde Espresso in Canada last year to an overwhelmingly positive response from partners (employees) and customers. Building on that success, this is the first new addition to the company’s U.S. core espresso menu and, as a permanent addition will be available year-round. Starbucks® Blonde Espresso is also available in pods for the Verismo® System by Starbucks and, joins Starbucks portfolio of lighter roast offerings including Starbucks® Blonde Roast coffees, which were introduced as whole bean packaged coffee and brewed options in 2012. 
    Created by a team of master blenders and roasters, Starbucks® Blonde Espresso brings together beans from Latin America and East Africa, roasted to the peak of their flavor to showcase the coffee's balanced, subtle sweetness.
    `,
    roast: "Blonde",
    processing: "",
    body: "",
    acidity: "",
    blend: true,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo!"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

Coffee.create(coffeesArr)
  .then((createdCoffee) => {
    console.log(`Created ${createdCoffee.length} in the DB`);
    mongoose.disconnect(() => console.log("Disconnected from the db"));
  })
  .catch((err) => console.log(err));
