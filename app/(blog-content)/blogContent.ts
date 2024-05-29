import { blogImages } from "./blogImages";

export const blogCategories = [
  {
    id: "1",
    title: "Kitchen",
  },
  {
    id: "2",
    title: "Travel",
  },
  {
    id: "3",
    title: "Food",
  },
  {
    id: "4",
    title: "Tips and guide",
  },
  {
    id: "5",
    title: "Fitness",
  },
  {
    id: "6",
    title: "Home Decor",
  },
  {
    id: "7",
    title: "Chocolate",
  },
];

export const tags = [
  { title: "Kitchen" },
  { title: "House" },
  { title: "Travel" },
  { title: "Riyadh" },
  { title: "Tea" },
  { title: "Food" },
  { title: "Tips and Guide" },
  { title: "Fitness" },
  { title: "Home Decor" },
  { title: "Furniture" },
  { title: "Chocolate" },
];

export const blogData = [
  {
    featuredBlog: true,
    id: "",
    authorId: "",
    image: blogImages.kitchenHoodsFeatureImg,
    authorName: "Habib",
    publishedDate: "1 January 2024",
    href: "/kitchen-hoods",
    alt: "A large kitchen hoods",
    title:
      "Conquering the Kitchen with Clarity: Your Comprehensive Guide to Hoods",
    description:
      "Conquering the Kitchen with Clearness: Your Definitive Guide to Kitchen Hoods Kitchen hoods are the unsung heroes of culinary battles. Hovering over your stove, these silent sentinels take care of the smoke, grease and odors released during cooking, keeping your kitchen fresh and your lungs healthy. But with so many options available, choosing the right hood can feel like navigating a maze. ",
    tags: ["Kitchen", "House"],
    category: "Kitchen",
    userComments: [],
  },
  {
    featuredBlog: true,
    id: "",
    authorId: "",
    image: blogImages.seafoodCuisineFeatureImg,
    authorName: "Habib",
    publishedDate: "1 January 2024",
    href: "/seafood-cuisine",
    alt: "Seafood",
    title: "How to prepare the best seafood in the world.",
    description:
      "The ocean's bounty offers a treasure trove of delicacies, and cultures around the world have developed unique and delicious ways to showcase the best seafood. From the delicate artistry of Japanese sushi to the bold spices of Moroccan tagines, seafood takes center stage in countless culinary traditions, exciting the sense of taste and enriching cultural experiences.  ",
    tags: ["Kitchen", "Food"],
    category: "Food",
    userComments: [],
  },
  {
    featuredBlog: true,
    id: "",
    authorId: "",
    image: blogImages.hersheyChocolateFeatureImg,
    authorName: "Habib",
    publishedDate: "1 January 2024",
    href: "/hershey-chocolate",
    alt: "hershey's chocolate",
    title:
      " Revealing the sweet secrets of Hershey&apos;s chocolate: a journey through decades of delight",
    description:
      "For more than a century,Hershey's chocolate has been synonymous with creamy sweetness and nostalgic memories. From its iconic candy bars to its versatile baking squares, Hershey&apos;s has established itself as a cornerstone of American confectionery, delighting generations with its unique flavors....",
    tags: ["Chocolate", "Food"],
    category: "Chocolate",
    userComments: [],
  },
  {
    featuredBlog: true,
    id: "",
    authorId: "",
    image: blogImages.bestChocolateFeatureImg,
    authorName: "Habib",
    published_date: "1 January 2024",
    href: "/best-chocolate",
    alt: "A dark chocolate",
    title: "The best chocolate in the world: a comprehensive guide",
    description:
      " Chocolate, the word itself evokes a series of delightful sensations - creamy textures, rich aromas, and the promise of pure indulgence. But this ubiquitous treat boasts a history as rich and complex as its flavor.....",
    tags: ["Chocolate", "Food"],
    category: "Chocolate",
    userComments: [],
  },
  {
    featuredBlog: false,
    genre: "normal-blog",
    image: blogImages.touristPlacesRiyadhFeatureImg,
    authorName: "Alec Whitten",
    publishedDate: "• 1 Jan 2023",
    href: "/tourist-place-riyadh",
    title:
      "Best tourist places in the Kingdom of Saudi Arabia, excellent tourism guide",
    description:
      "Travelling to Saudi Arabia offers a captivating journey through some of the world's best tourist attractions, where ancient traditions blend seamlessly with modern marvels. From vast expanses of desert dunes to vibrant, vibrant cities, Saudi Arabia attracts travelers with its rich tapestry of cultural heritage and scenery. The stunning natural landscape and warm hospitality. One of the most compelling reasons to explore Saudi Arabia is its wealth of historical and cultural treasures.",
    tags: ["Travel", "Riyadh"],
    category: "Travel",
    alt: "Best Tourist Places in Riyadh",
  },
  {
    featuredBlog: false,
    image: blogImages.teaBlogFeatureImg,
    authorName: "Alec Whitten",
    publishedDate: "• 1 Jan 2023",
    href: "/perfect-tea",

    title: "How to make a perfect cup of tea. A comprehensive guide",
    description:
      "Tea has been appreciated for centuries, celebrated for its comforting warmth, soothing aroma, and countless health benefits. From the elegant Japanese matcha ceremony to the intense flavors of Indian tea, tea culture spreads across the world, capturing hearts and minds with every sip...",
    tags: ["Tea", "Food"],
    category: "Food",
    alt: "A cup of tea",
  },
  {
    featuredBlog: false,
    image: blogImages.carReantalCompanyFeatureImg,
    authorName: "Alec Whitten",
    publishedDate: "12 Feb 2024",
    title: "Best Car Rental Companies in Saudi Arabia",
    href: "/best-car-rental-companies-in-saudi-arabia",
    description:
      "Planning a trip to Saudi Arabia and in need of reliable transportation? Look no further! We've curated a list of the top 10 car rental companies across the Kingdom to ensure your journey is smooth and hassle-free.",
    tags: ["Travel", "Tips and Guide"],
    category: "Tips and guide",
    alt: "Standing car for rental service",
  },
  {
    featuredBlog: false,
    image: blogImages.bestKitchenFeatureImg,
    authorName: "Habib Ullah",
    publishedDate: "• 1 Jan 2024",
    title: "Best Kitchen Sinks for Every Need",
    href: "/best-kitchen-sink",
    description:
      "The kitchen sink - the unsung hero of countless meals, dishes, and culinary creations. It's a workhorse, a stage for prep work, and a crucial element in maintaining a clean and functional kitchen. But with a multitude of options available, choosing the best kitchen sink can feel overwhelming. Fear not! This comprehensive guide dives into the top 10 contenders, exploring materials, styles, functionalities, and price points to help you find the perfect fit for your kitchen.",
    tags: ["Kitchen", "Tips and Guide"],
    category: "Kitchen",
    alt: "A kitchen sink",
  },
  {
    featuredBlog: false,
    image: blogImages.bestHouseRentCompanyFeatureImg,
    authorName: "Alec Whitten",
    publishedDate: "• 1 Jan 2023",
    title:
      "Top House Rent Companies in Saudi Arabia: Finding Your Ideal Rental",
    href: "/house-rent-company",
    description:
      "Are you looking for a house to rent in Saudi Arabia? With its booming real estate market, finding the perfect rental can be overwhelming. To simplify your search, we&apos;ve compiled a list of the top house rent companies in Saudi Arabia, each offering a range of options to suit your needs and preferences.",
    tags: ["Travel", "Tips and Guide"],
    category: "Tips and guide",
    alt: "House renting company banner",
  },
  {
    featuredBlog: false,
    image: blogImages.bestGymFeatureImg,
    authorName: "Alec Whitten",
    publishedDate: "• 1 Jan 2023",
    href: "/top-5-best-gyms-in-riyadh",
    title: "Top 5 best gyms in Riyadh",
    description:
      "Are you on the hunt for the best gym in Riyadh to kickstart your fitness journey? Look no further! We&apos;ve curated a comprehensive guide to the top fitness centers in the city, each offering a unique blend of facilities, expert training, and welcoming environments to help you reach your fitness goals.",
    tags: ["Fitness", "Tips and Guide", "Gym"],
    category: "Fitness",
    alt: "A man running in treadmill",
  },
  {
    featuredBlog: false,
    image: blogImages.usedFurnitureFeatureImg,
    authorName: "Abu Malik",
    publishedDate: "• 1 March 2024",
    href: "/buy-used-furniture",
    title:
      "أثاث مستعمل في السعودية. دليل شامل لشراء أثاث مستعمل مرضي عبر الإنترنت.",
    description:
      "يبحث الكثير منا عن أثاث أنيق وعصري لتزيين منازلهم، ولكن بأسعار مناسبة. لحسن الحظ، يعتبر الأثاث المستعمل خيارًا رائعًا لتحقيق ذلك!  تتيح لك شراء قطع مميزة بتكلفة أقل بكثير من سعرها الأصلي، مع الحفاظ على البيئة عن طريق إعادة استخدام الأثاث بدلاً من التخلص منه.",
    tags: ["Home Decor", "Furniture"],
    category: "Home Decor",
    alt: "اثاث مستعمل",
  },
  {
    featuredBlog: false,
    image: blogImages.howToMakeCupcakeFeatureImg,
    authorName: "Abu Malik Asif",
    publishedDate: "• 1 March 2024",
    href: "/how-to-make-cupcake",
    title: "كيفية صنع كب كيك: دليل شامل لتحضير أشهى أنواع الكب كيك",
    description:
      "تُعَد كب كيك من أكثر الحلويات شهرةً وشعبيةً، وتعد وجبة خفيفة شهية تُحبها الجميع. وباستخدام هذا الدليل الشامل، ستتمكن من تحضير مجموعة متنوعة من الكب كيك بسهولة في منزلك. دعونا نكتشف معًا كيفية تحضير أشهى أنواع الكب كيك:",

    tags: ["Food", "Cake"],
    category: "Food",
    alt: "كاب كيك",
  },
  {
    featuredBlog: false,
    image: blogImages.howToGetDrivingLicenseFeatureImg,
    authorName: "Abu Malik Asif",
    publishedDate: "• 1 April 2024",
    href: "/how-to-get-driving-license-for-women",
    title:
      "كيفية حجز موعد للحصول على رخصة قيادة للنساء في المملكة العربية السعودية: القوانين، الرسوم، وإجراءات التقديم",
    description:
      "تمثل رخصة القيادة حرية واستقلالية مهمة للنساء في المملكة العربية السعودية بعد إلغاء الحظر على قيادة المرأة في عام 2018. ومع ذلك، هناك إجراءات محددة يجب على النساء اتباعها للحصول على رخصة القيادة. دعونا نلقي نظرة على كيفية حجز موعد والحصول على رخصة القيادة للنساء في المملكة العربية السعودية.",
    tags: ["Tips and Tricks"],
    category: "Tips and Tricks",
    alt: "رجل يجلس في مقعد السائق",
  },
  {
    featuredBlog: false,
    image: blogImages.bestCoffeeShopFeatureImg,
    authorName: "Abu Malik Asif",
    publishedDate: "• 6 May 2024",
    href: "/best-coffee-shops",
    title: "استمتع بأجواء مميزة: اكتشف أفضل 5 مقاهي في الرياض",
    description:
      "مع وجود مجموعة متنوعة من المقاهي في الرياض، يمكن أن يكون من الصعب اختيار الأفضل بينها. لذلك، قمنا بتجميع قائمة بأفضل خمسة مقاهي في الرياض التي تقدم تجارب فريدة وأجواء رائعة للزوار:",
    tags: ["Food"],
    category: "Food",
    alt: "رجل يجلس في مقعد السائق",
  },
];
