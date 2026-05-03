<script>
  import Don from "$lib/components/Don.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Heading from "$lib/components/Heading.svelte";

  const dons = [
    {
      duration: "August 2025 - March 2026",
      members: [
        {
          name: "Varshini",
          img: "/assets/dons/varshini.jpeg",
          description:
            "Hey! I am Varshini, a 17-year-old aspiring lawyer with a passion for human rights, women’s empowerment, social impact and journalism (which inspired me to form the Editorial Team here at Evora).  I have been a member of PLC Evora since early 2025 and have had the honour of serving as its Chairperson since October 2025 - an initiative started by my seniors that I hold extremely close to my heart. PLC Evora acts as a platform where I have been able to blend my multiple interests and skills while having an impact on our society and meeting a lot of new people. I am an avid MUN chairperson and delegate with a love for debate, research, and press conferences. I am also a big foodie with a longstanding love for Mexican cuisine and cooking. One of my favorite things to do is go on long walks or swing in parks while listening to music across various genres and languages.",
          role: "Co-Chairperson",
        },
        {
          name: "Nikunj",
          img: "/assets/dons/nikunj.jpeg",
          description: `"You have to act as if it were possible to radically transform the world, and do it all the time." -Angela Davis. Hello everyone. I'm Nikunj, a freshman psychology major from Azim Premji University. I joined PLC Evora in the last quarter of 2025, and have been serving as the co-chairperson since January. As a socialist, intersectional feminist, I am deeply interested in how the class struggle and gender inequality influence one another. When I'm not reading books or writing poetry, I find my solace in listening to music, playing the piano, and debating with my friends.`,
          role: "Co-Chairperson",
        },
        {
          name: "Avni",
          img: "/assets/dons/avni.jpeg",
          description:
            "Hi I'm Avni and I'm an aspiring fashion communicator. I have a strong interest in photography and interior decorating, but my passion for photography stands out the most, I can't really express what I want to say through words, so i try to speak through my photographs. Fashion becomes my language turning  my feelings into visuals. I'm more drawn to emotion-led creativity which shapes my approach to art and explains my interests in creating work that's authentic and honest, but basically if it makes me feel something I'm already interested.",
          role: "Social Media Manager",
        },
        {
          name: "Vigna",
          img: "/assets/dons/vigna.jpeg",
          description:
            "Hallo! Vigna here. I am an enthusiastic aspiring attorney and diplomat has a crushing passion for the world and international trade law. The kind of person, always down for the challenge, staying put and feeling 'chalant' no matter what the situation may be. People know me as the always-hardworking and always-devoted kind of person. However, far from being the last person standing between caution and the line, never back down on taking the biggest risks and best opportunities life may offer. As an attorney and a diplomat in the making, I aim for making the world a more just and definitely more exciting place for women and children. You never see me with a frown, always sporting a smile! It's what gives meaning fighting for what's right!",
          role: "Secretary",
        },
        {
          name: "Hridaya",
          img: "/assets/dons/daya.jpeg",
          description:
            "“Great things come in small packages”, I might be small but my intentions are big. Hey, my name is Hridaya Shekar Iyer, and I am the project cordniator of plc evora. As a professional dancer, I can confidently say that I am deeply dedicated to the art, using it as a form of expression and connection. Growing up as the daughter of the founders of a nonprofit NGO dedicated to serving the underprivileged, I have always been deeply committed to social service. I am active, friendly, and cheerful, and I strive to contribute positively to those around me. As a former captain, I have developed strong leadership skills and a drive to create meaningful change in the world.",
          role: "Project Coordinator",
        },
      ],
    },
  ];
</script>

<div class="py-24 z-0">
  <Heading text="Our Team" />

  <hr />

  {#each dons as session}
    <h2 class="text-6xl text-center py-12">{session.duration}</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 w-full gap-12 px-[8vw]">
      {#each session.members as member}
        <Don
          name={member.name}
          img={member.img}
          description={member.description}
          role={member.role}
        />
      {/each}
    </div>
  {/each}
</div>

<Footer top="" />
