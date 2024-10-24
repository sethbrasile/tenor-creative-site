<script setup>
const services = [
  {
    title: "New Site",
    description:
      "We build custom sites that elevate your brand and engage your audience. Our team combines sleek design with cutting-edge functionality to create sites that are not only visually stunning but also optimized for performance and user experience. <br /><br /> A new site build is more than just a refresh—it's a chance to redefine how customers see your business. Let us craft a website that drives results and grows with your goals.",
    icon: "bx:bxs-book-content",
  },
  {
    title: "SEO",
    description:
      "With deep expertise in optimizing content, improving site structure, and targeting keywords, we help your business rank higher on search engines. <br /><br /> Why does this matter? A better search ranking means more visibility, more traffic, and more opportunities to convert visitors into customers. Let us fine-tune your digital presence so you can stand out in a crowded online space.",
    icon: "bx:bxs-file-find",
  },
  {
    title: "Content Strategy",
    description:
      "The other side of the SEO-coin; We craft content strategies that connect with your audience and amplify your brand's voice. Our team develops targeted, engaging content designed to boost your online presence, drive traffic, and convert leads. <br /><br /> A strong content strategy is the key to standing out in today's digital landscape—let us help you tell your story in a way that resonates and delivers results.",
    icon: "bx:library"
    },
  {
    title: "Custom App Dev",
    description:
      "We deliver custom app development tailored to your business needs. Whether you're looking to streamline operations or engage customers in new ways, our team builds apps that are intuitive, scalable, and built to perform. We handle everything from concept to launch, ensuring a seamless experience across all platforms. <br /><br />Let us develop the solution that drives innovation and growth for your business.",
    icon: "bxl:dev-to",
  },
  {
    title: "Digital Marketing",
    description:
      "Tenor Creative's digital marketing solutions are designed to maximize your reach and drive conversions. Our team specializes in helping you create targeted campaigns that attract the right audience, paired with advanced funnel tracking to optimize every step of the customer journey. <br /><br /> We don't just generate leads, we help you understand how to convert them into loyal customers.",
      icon: "bx:bxs-shopping-bag",
  },
  {
    title: "Security",
    description:
      "We prioritize your security by keeping things simple. Our streamlined approach minimizes unnecessary complexity, reducing potential vulnerabilities while maintaining maximum performance.<br /><br />When our streamlined approach doesn't meet your needs, we're also cyber security experts who have been in the industry for many years. We can design a secure solution that meets your requirements.",
    icon: "bx:bxs-lock",
  }
];
</script>

<template>
  <LandingContainer>
    <LandingFeatures
      :features="services"
      heading="Services"
      tagline="We're here to help you create the best possible experiences for your customers."
    ></LandingFeatures>
    <LandingHero />
  </LandingContainer>
</template>
