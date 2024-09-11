import Navbar from "@/app/components/SubNavbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Dog Diet',
};

export default function Dog_Safety() {
  return (
    <>
        <Navbar />
        <Image src="/dog-diet-1.png" alt="Background Image of the Blog" width={1000} height={100} className="blog-bg-img"/>
        <div className="blog-div">
          <h1 className="blog-heading">
            How to make the Paw-fect Meal For Your Dog
          </h1>
          <h2 className="blog-author">- Kavya sudame</h2>
          <h2 className="blog-author-pos">Content Writer @MyPerro</h2>
          <p className="blog-para">
            As a pet paw-rent, you want what&apos;s best for your dog. Be it the toys
            they play with, the kind of exercise they have on a daily basis, the
            amount of time they stay out and socialise. Just like you don&apos;t
            compromise with these things, the diet of your pet shouldn&apos;t be
            ignored, either. Your dog needs a nutritious diet that meets with
            their unique needs. A balanced diet is essential for your dog&apos;s
            overall health, happiness, and well-being. In this article, we&apos;ll
            explore the different facets of a well-balanced diet for your dog
            and how significant it is for the long-term health of your pup.
          </p>
          <h3 className="blog-mini-heading">
            Why is a balanced diet important?
          </h3>
          <p className="blog-para">
            Dogs require a specific mix of proteins, carbohydrates, fats,
            vitamins and minerals to stay healthy and playful. A balanced diet
            ensures that your dog checks all the points mentioned below.
          </p>
          <ol className="blog-ol">
            <li> Build and repair muscles, bones and tissues</li>
            <li>Have a optimal digestive system</li>
            <li>Boost energy levels and mental well-being</li>
            <li>Have a silky shiny coat that doesn&apos;t shed excessively</li>
            <li>Support the immune system and lower the risk of diseases</li>
          </ol>
          <Image
            src="/dog-diet-nutriton-chart.png"
            alt="Nutrition chart for the dog"
            width={10000}
            height={10000}
            className="blog-img"
          />
          <p className="blog-img-desc">Nutrition chart of the dog</p>
          <h3 className="blog-mini-heading">
            What does an unbalanced diet do for your dog
          </h3>
          <p className="blog-para">
            An unbalanced diet fed to your dog can cause different health issues
            like:
          </p>
          <ol className="blog-ol">
            <li> Weight Problems (obesity or malnutrition)</li>
            <li>
              Skin & Fur Problems (Itching, Redness, Shedding, or infections)
            </li>
            <li>Digestive Problems (Diarrhoea, Constipation, or Allergies)</li>
            <li>Poor Dental Health</li>
            <li>
              Highly prone to chronic diseases (Arthritis, Diabetes, or heart
              disease)
            </li>
          </ol>
          <Image
            src="/dog-diet-bad.png"
            alt="dog with unbalanced diet"
            width={10000}
            height={10000}
            className="blog-img"
          />
          <p className="blog-img-desc">
            What a bad nutrition can do to the dog
          </p>
          <h3 className="blog-mini-heading">
            What are the key nutrients that should be included your dog&apos;s diet?
          </h3>
          <p className="blog-para">A healthy dog&apos;s diet should include:</p>
          <ol className="blog-ol">
            <li>High-quality protein sources (meat, fish, or eggs)</li>
            <li>Whole grains (brown rice, oats, or barley)</li>
            <li>Vegetables (sweet potatoes, carrots, or green beans)</li>
            <li>Healthy fats (salmon oil or coconut oil)</li>
            <li>
              Essential vitamins and minerals (calcium, phosphorus, or vitamin
              D)
            </li>
          </ol>
          <Image
            src="/dog-diet-nutrition.png"
            alt="Nutrition table for the dog"
            width={10000}
            height={10000}
            className="my-[20px] self-center w-[60vw]"
          />
          <p className="blog-img-desc">
            <a href="https://www.barclondon.com/" className="text-blue-700  italic" target="_blank">
            Nutrients required for the dog
            </a>
          </p>
          <p className="blog-para">
            In an article published by the National Library of Medicine, the
            authors conducted a trial at a private kennel located in Naples,
            Italy. In the trial 50 adult dogs were included and haematological,
            biochemical and parasitological tests were performed on them before
            introducing them to various diets. At the end of the trial, these
            tests were conducted again. The preliminary results showed that only
            a few haematological parameters were affected when balanced diets
            were administered to healthy dogs. The sources of carbohydrates
            (starch and dietary fiber) and the appropriate equilibrium between
            energy nutrients (e.g., protein, fat, and starch) could modify the
            indicators of lipid, and carbohydrate metabolism (AST, fructosamine,
            lipase, triglycerides) and improve liver function.
          </p>
          <p className="blog-para">
            According to the Science based guide for pet owners published by the
            National Academies Press “Your Dog&apos;s Nutritional Needs”, an adult
            dog&apos;s daily diet can contain up to 50% carbohydrates by weight,
            including 2.5-4.5% from fibre. A minimum approximately 5.5% of the
            diet should come from fats and 10% from proteins. Petfood labels do
            not generally list amounts of essential nutrients in grams, hence
            pet parents should not completely rely on packaged pet food to
            complete their dog&apos;s nutrition goals.
          </p>
          <p className="blog-para">
            Pet parents should opt for fresh, home cooked meals for their pups.
            This will ensure that your dog stays fit and happy in the long term.
          </p>
          <h3 className="blog-mini-heading">Some things to keep in mind</h3>
          <ol className="blog-ol">
            <li>
              Consult with your veterinarian to determine the best diet for your
              dog according to their age, health, and lifestyle.
            </li>
            <li>
              Choose a high-quality commercial dog food that best fulfills the
              dietary needs of your dog.
            </li>
            <li>
              Make a meal plan for your dog, making sure to include home-cooked
              meals <em>after consulting with your veterinarian</em>.
            </li>
            <li>
              Avoid over-supplementing your dog. Do not add supplements to your
              dog&apos;s meal unnecessarily, as it can lead to nutritional imbalance.
            </li>
            <li>
              Whenever you want to change your dog&apos;s diet, do it gradually by
              reducing the quantity of the current food and introducing the new
              food in small quantities.
            </li>
          </ol>
          <p className="blog-mini-heading">Conclusion</p>
          <p className="blog-para">
            A balanced diet is crucial for your dog&apos;s health and well-being.
            Keep in mind that every dog is unique and their needs vary. Make
            sure you consult your veterinarian to make necessary changes in your
            dog&apos;s diet. By providing your pup a healthy and wholesome diet, you
            will ensure that they live a comfortable and healthy life. Happy
            feeding!
          </p>
          <p className="blog-safety">Note: The above images are for only illustrations purpose</p>
        </div>
      <Footer />
    </>
  );
}
