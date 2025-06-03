"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {  FaInstagram, FaLink } from "react-icons/fa";

const projects = [
  {
      id: 1,
      title: "Social Media Campaign",
      category: "Social Media Creative",
      description: "Creative social media posts and campaigns for various brands, focusing on engagement and visual impact.",
      client: "Multiple Clients",
      year: "2024",
      tags: ["Instagram", "Facebook", "Branding", "Creative"],
      imageUrl: "/img1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "iMax Jersey Branding",
      category: "Branding",
      description: "Complete branding solution for iMax jersey including logo design, color scheme, and brand guidelines.",
      client: "iMax Sports",
      year: "2023",
      tags: ["Logo Design", "Branding", "Sports", "Identity"],
      imageUrl: "/img3.jpg",
      featured: true
    },
    {
      id: 3,
      title: "EXIBINE LTD 3D Signage",
      category: "Branding",
      description: "Professional 3D signage design for EXIBINE LTD, creating modern and impactful visual identity.",
      client: "EXIBINE LTD",
      year: "2023",
      tags: ["3D Design", "Signage", "Corporate", "Visual Identity"],
      imageUrl: "/img4.jpg"
    },
    {
      id: 4,
      title: "Restaurant Logo Collection",
      category: "Logofolio",
      description: "Logo designs for DI FOOD Catering Services, GET IT RESTO, and ANGE FOOD - focusing on food industry branding.",
      client: "Food Industry",
      year: "2023-2024",
      tags: ["Logo Design", "Food", "Restaurant", "Catering"],
      imageUrl: "/img9.jpg"
    },
    {
      id: 5,
      title: "Female First Initiative",
      category: "Logofolio",
      description: "Empowering logo design for Female First Initiative EST. 2019, representing women empowerment and leadership.",
      client: "Female First Initiative",
      year: "2023",
      tags: ["NGO", "Empowerment", "Social", "Logo Design"],
      imageUrl: "/img7.jpg"
    },
  
    {
      id: 6,
      title: "iMax Jersey Branding",
      category: "Branding",
      description: "Complete branding solution for iMax jersey including logo design, color scheme, and brand guidelines.",
      client: "iMax Sports",
      year: "2023",
      tags: ["Logo Design", "Branding", "Sports", "Identity"],
      imageUrl: "/img2.jpg",
      featured: true
    },
     {
      id: 7,
      title: "Social Media Posts",
      category: "Social Media Creative",
      description: "Creative social media posts and campaigns for various brands, focusing on engagement and visual impact.",
      client: "Multiple Clients",
      year: "2024",
      tags: ["Instagram", "Facebook", "Branding", "Creative"],
      imageUrl: "/img6.jpg",
      featured: true
     },
     {
      id: 8,
      title: "Female First Initiative",
      category: "Logofolio",
      description: "Empowering logo design for Female First Initiative EST. 2019, representing women empowerment and leadership.",
      client: "Female First Initiative",
      year: "2023",
      tags: ["NGO", "Empowerment", "Social", "Logo Design"],
      imageUrl: "/img8.jpg"
    },
];

const WorkSection = () => {
  return (
    <section className=" relative py-20 px-4 md:px-8 bg-gray-50" id="work">
      <div className="max-w-7xl mx-auto pt-8">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
        >
          Featured <span className="text-red-500">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={"https://pdflink.to/5d6a0571/?fbclid=PAZXh0bgNhZW0CMTEAAaco6kSEoyvVs3vGm4U-qwacvcX-mCEBgjI4BorlG6zJRubB3CXfO0Uqfn-zQQ_aem_Z8piP1ii-JQ9wFMEOzwHkg"}
                    target="_blank"
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-red-500 transition-colors"
                  >
                    <FaLink className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href={"https://intagram.com/imax_best"}
                    target="_blank"
                    className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-red-500 transition-colors"
                  >
                    <FaInstagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <motion.h3
                  whileHover={{ color: "#ff4d5a" }}
                  className="text-xl font-bold mb-2 text-gray-900"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Feed Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            Behind the <span className="text-red-500">Scenes</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {[...Array(6)].map((_, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 0.95 }}
                href="https://instagram.com/imax_best"
                target="_blank"
                className="relative aspect-square overflow-hidden"
              >
                <Image
                  src={`/img${index + 1}.jpg`}
                  alt="Instagram Post"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                  <FaInstagram className="w-8 h-8 text-white" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkSection;