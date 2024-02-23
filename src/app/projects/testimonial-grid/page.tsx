import { barlowSemiCondensed } from "@/app/ui/fonts";
import Image from "next/image";
import quoteSvg from "../../../../public/testimonial-grid/bg-pattern-quotation.svg";
import imageDaniel from "../../../../public/testimonial-grid/image-daniel.jpg";
import imageJonathan from "../../../../public/testimonial-grid/image-jonathan.jpg";
import imageKira from "../../../../public/testimonial-grid/image-kira.jpg";
import imageJeanette from "../../../../public/testimonial-grid/image-jeanette.jpg";
import imagePatrick from "../../../../public/testimonial-grid/image-patrick.jpg";

export default function Page() {
  return (
    <div className={`${barlowSemiCondensed.className} bg-gray-200 h-full`}>
      {/* Global Container */}
      <div className="container mx-auto max-w-7xl p-2 md:p-10">
        {/* Grid Container */}
        <div className=" grid gap-6 grid-cols-1 text-white md:grid-cols-4 md:grid-rows-2">
          {/* Box 1 */}
          <div className="relative p-10 rounded-xl bg-purple-700 md:col-span-2">
            {/* Quote Image */}
            <Image
              src={quoteSvg}
              className="absolute top-3 right-10 scale-125 md:top-7 md:right-24 md:scale-150"
              alt=""
            />
            {/* Box Header */}
            <div className="flex z-10 space-x-4">
              <Image
                src={imageDaniel}
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
                alt=""
              />
              <div className="text-sm">
                <h4 className="opacity-90">Daniel Clifford</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Large Text */}
            <p className="relative z-10 mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ipsa,
              asperiores maxime quidem dolorum nobis, fugit eius voluptatem
              corporis, magni sed repellendus natus blanditiis sequi officia
              laudantium possimus dolor suscipit.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              odio culpa, provident dolores aperiam officiis aliquid hic a omnis
              expedita quod maxime molestias praesentium blanditiis modi quo
              incidunt dignissimos reiciendis perferendis harum cum odit!
              Ducimus temporibus officia quae quasi vitae doloribus
              reprehenderit excepturi, voluptatibus maiores modi ex molestiae,
              quas aspernatur qui provident omnis eum nesciunt cumque molestias.
              Velit reprehenderit eveniet doloribus dolorum perspiciatis omnis
              aut, quasi sit. Fugiat error aspernatur vitae consectetur ad
              officiis itaque.
            </p>
          </div>

          {/* Box 2 */}
          <div className="p-10 rounded-xl bg-gray-600">
            {/* Box Header */}
            <div className="flex space-x-4">
              <Image
                src={imageJonathan}
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
                alt=""
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jonathan Walters</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Large Text */}
            <p className="relative z-10 mt-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              blanditiis cum rem, explicabo ut animi, modi sint amet ab quod
              excepturi corporis eius velit iusto deleniti hic, recusandae odio.
            </p>
          </div>

          {/* Box 3 */}
          <div className="hidden p-10 rounded-xl text-gray-900 bg-white md:block md:row-span-2">
            {/* Box Header */}
            <div className="flex space-x-4">
              <Image
                src={imageKira}
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
                alt=""
              />
              <div className="text-sm">
                <h4 className="opacity-90">Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Large Text */}
            <p className="relative z-10 mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              nisi animi accusamus soluta possimus ex, quia asperiores nihil ut
              minima alias? Sunt adipisci harum at.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem veritatis quidem, modi neque eveniet dolorum magnam
              ratione? Suscipit cumque ratione repudiandae accusamus, temporibus
              fugit asperiores dolorum officiis, consequatur eaque aliquid
              similique quo reprehenderit. Consequuntur magni iure maiores,
              facere culpa nemo laboriosam totam tempore modi ullam rerum fugit
              quasi, illo voluptas itaque. Ducimus, sequi maxime praesentium
              omnis eligendi aliquid. Earum natus, nulla illo, vel unde
              voluptatem iure labore mollitia eveniet quod alias maxime?
              Praesentium, tenetur? Iusto cupiditate sint officiis similique
              molestias?
            </p>
          </div>

          {/* Box 4 */}
          <div className="p-10 rounded-xl text-gray-900 bg-white">
            {/* Box Header */}
            <div className="flex space-x-4">
              <Image
                src={imageJeanette}
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
                alt=""
              />
              <div className="text-sm">
                <h4 className="opacity-90">Jeanette Harmon</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Large Text */}
            <p className="relative z-10 mt-6 text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae nam doloribus vel quaerat explicabo pariatur maxime
              dicta iure dolores non.
            </p>
          </div>

          {/* Box 5 */}
          <div className="p-10 rounded-xl bg-gray-900 md:col-span-2">
            {/* Box Header */}
            <div className="flex space-x-4">
              <Image
                src={imagePatrick}
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
                alt=""
              />
              <div className="text-sm">
                <h4 className="opacity-90">Patrick Abrams</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Large Text */}
            <p className="relative z-10 mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Officiis, cupiditate? Velit distinctio tempora totam aspernatur
              qui odio ad.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
              totam provident recusandae iure aliquid mollitia maiores! Earum
              totam culpa ab tempore quaerat, aliquam veniam corporis ullam quia
              pariatur laborum tenetur illum rem magnam! Magni omnis saepe
              laboriosam fugit, porro molestiae dignissimos officiis rem maiores
              possimus culpa natus deserunt repellendus nisi?
            </p>
          </div>

          {/* Box 6 */}
          <div className="p-10 rounded-xl text-gray-900 bg-white md:hidden">
            {/* Box Header */}
            <div className="flex space-x-4">
              <Image
                src={imageKira}
                className="w-10 h-10 rounded-full ring-2 ring-purple-300"
                alt=""
              />
              <div className="text-sm">
                <h4 className="opacity-90">Kira Whittle</h4>
                <p className="opacity-50">Verified Graduate</p>
              </div>
            </div>
            {/* Large Text */}
            <p className="relative z-10 mt-6 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              nisi animi accusamus soluta possimus ex, quia asperiores nihil ut
              minima alias? Sunt adipisci harum at.
            </p>
            {/* Small Text */}
            <p className="mt-6 opacity-50">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatem veritatis quidem, modi neque eveniet dolorum magnam
              ratione? Suscipit cumque ratione repudiandae accusamus, temporibus
              fugit asperiores dolorum officiis, consequatur eaque aliquid
              similique quo reprehenderit. Consequuntur magni iure maiores,
              facere culpa nemo laboriosam totam tempore modi ullam rerum fugit
              quasi, illo voluptas itaque. Ducimus, sequi maxime praesentium
              omnis eligendi aliquid. Earum natus, nulla illo, vel unde
              voluptatem iure labore mollitia eveniet quod alias maxime?
              Praesentium, tenetur? Iusto cupiditate sint officiis similique
              molestias?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
