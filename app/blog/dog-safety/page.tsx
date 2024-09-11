import Navbar from "@/app/components/SubNavbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dog Safety',
};

export default function Dog_Safety() {
  return (
    <>
      <Navbar />
      <Image src="/dog-safety-1.jpg" alt="Background Image of the Blog" width={1000} height={100} className="blog-bg-img"/>
      <div className="blog-div">
        <h1 className="blog-heading">
          Dog safety : Tips for preventing accidents and injuries
        </h1>
        <h2 className="blog-author">- Arunima Mishra</h2>
        <h2 className="blog-author-pos">Content Writer @MyPerro</h2>
        <p className="blog-para">
          If we talk about having a companion who brings immense joy, love and
          loyalty in our lives, a pet dog is a perfect example of that. Dogs
          have earned the title of &quot;man&apos;s best friend&quot; for good
          reason. These loyal, affectionate, and playful creatures have been a
          part of human lives for thousands of years. However, being a
          responsible pet owner or a responsible citizen means ensuring their
          safety at all times. With the changing surroundings, dogs and other
          animals are equally prone to accidents and injuries as men. Preventing
          accidents and injuries is crucial for keeping our furry friends happy
          and healthy. This blog puts light on the measures which one can take
          for ensuring safety of their best companion.
        </p>
        <p className="blog-para">
          For pet dogs, safety starts at home. Our homes should be sanctuaries,
          free from potential dangers such as toxic plants, small objects that
          could be swallowed, and unsecured trash bins that might contain
          harmful substances. Regular veterinary check-ups, up-to-date
          vaccinations, and flea and tick preventatives are critical to
          maintaining our pets&apos; health. Proper training and socialisation
          are also vital, helping dogs feel secure and behave appropriately in
          various environments. When stepping outside, a sturdy leash and
          harness, avoiding extreme weather conditions, and never leaving our
          dogs unattended in vehicles are essential practices. These measures
          ensure that our beloved pets are safe, happy, and well-adjusted
          members of our families.{" "}
        </p>
        <Image src="/regular-checkup.jpg" alt="Regular checkup for the dogs" width={1000} height={100} className="blog-img"/>
        <p className="blog-img-desc">Regular checkup for the dogs</p>
        <p className="blog-para">
          Visibility can be a challenge during evening and night times when you
          take your pet for a walk. This is where reflecting collars come to the
          rescue. These collars are designed with reflective materials that
          shine brightly when illuminated by headlights or streetlights, making
          your dog visible to drivers and cyclists. It is a simple yet effective
          tool to prevent accidents and ensure your dog stays safe during
          low-light conditions. Furthermore, just like baby-proofing,
          dog-proofing your home is essential.{" "}
        </p>
        <Image src="/reflective-collor.jpg" alt="A reflective coller" width={1000} height={100} className="blog-img"/>
        <p className="blog-img-desc">A reflective coller</p>
        <p className="blog-para">
          {" "}
          Ensure that electrical cords are out of reach, toxic plants are
          removed, and sharp objects are safely stored away. Using small gates
          to restrict access to certain areas, and keeping small objects that
          could be swallowed out of reach can be of great help. A secure
          environment prevents accidents and keeps your dog safe and sound.
          Training your dog not only makes them well-behaved but also enhances
          their safety. Commands like &quot;sit,&quot; &quot;stay,&quot; and
          &quot;come&quot; can prevent your dog from running into dangerous
          situations. Additionally, proper socialisation helps your dog interact
          safely with other dogs and people, reducing the risk of conflicts and
          injuries.
        </p>
        <Image src="/sit-command.jpg" alt="Basic command training for dogs" width={1000} height={100} className="blog-img"/>
        <p className="blog-img-desc">Basic command training for dogs</p>
        <p className="blog-para">
          Street dogs face a different set of challenges and dangers. Often
          exposed to harsh weather, lack of food and water, and the constant
          threat of traffic, street dogs lead precarious lives. However,
          communities can make a significant difference in their well-being.
          Setting up feeding stations, providing access to clean water, and
          creating safe shelters can greatly improve their quality of life.
          Spaying and neutering programs are crucial in controlling the{" "}
        </p>
        <p className="blog-safety">Note: The above images are for only illustrations purpose</p>
      </div>
      <Footer />
    </>
  );
}
