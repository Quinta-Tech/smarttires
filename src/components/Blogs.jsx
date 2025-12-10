import React, { useEffect, useState, useContext } from 'react';
import { getPosts } from './../utils/wordpress';
import './../styles/blog.css';
import  Default from './../assets/default.png'
import { LanguageContext } from './LanguageContext';
import { motion } from "framer-motion";
const Card = ({ backgroundImage, topText, bottomText, href  }) => {
  return (
    
    <a href={href} target='_blank' className="bg-cover relative  transition  hover:scale-105 flex  rounded-3xl h-full min-h-52 bg-center  " style={{ backgroundImage: `url(${backgroundImage})`, backgroundColor: '#FAFAFF' }}>
      <div className='card-filter w-full  p-8  rounded-3xl ' >
        <div className="card-content grid grid-cols-1 content-between text-white  h-full" >
          <div className="top-left font-['Esphimere',_sans-serif] font-normal text-white-B">{topText}</div>
          <div className="bottom-left   ">
            <p className="font-bold text-lg uppercase font-['Esphimere',_sans-serif] ">
            {bottomText}
            </p>
            <p className='text-white-B text-normal text-sm font-thin'>Leer más</p>
            </div>
        </div>
      </div>
    </a>
  );
};

function Blogs() {
  const { language } = useContext(LanguageContext);
  const [posts, setPosts] = useState([]);
  const content = {
    es: {
        title: 'Quinta blog',  
        seeMore: 'VER TODAS LAS PUBLICACIONES'   
    },
    en: {
      title: 'Quinta blog',
      seeMore: 'SEE ALL POSTS'
    }
  }
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getPosts(language);       
        const firstFourPosts = postsData.slice(0, 4);
        setPosts(firstFourPosts);

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [language]);

  return (
    <section className="relative bg-white min-h-96 ">
      <div className='Blogs relative py-12 md:py-16 px-6 md:px-28 z-10  h-full bg-gradient-to-b from-custom-gray-1 to-custom-gray-2'>
        <div className='container mx-auto '>
          <motion.div className='flex justify-between items-center mb-8 '
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
            <h2 className='text-3xl md:text-5xl text-custom-black'>{content[language].title}</h2>
            <a href="https://blog.quinta.tech/" target='_blank' className='blog_link text-custom-black text-xs md:text-base '><span>  </span> {content[language].seeMore}</a>
          </motion.div>
          <ul className='grid grid-cols-1 md:grid-cols-4 gap-4   md:h-[32rem]'>

          {posts.map(post => {
            
              const imageUrl = extractImageUrl(post.jetpack_featured_media_url,Default); 
    
              const formattedDate = formatDate(post.date, language);
              return (
                <motion.li key={post.id}
                initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
                  <Card
                    backgroundImage={imageUrl}
                    topText={formattedDate}
                    bottomText={post.title.rendered}
                    href={post.link}
                  />
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    
    </section>
  );
}

const extractImageUrl = (htmlString,defaultImageUrl) => {
  if (htmlString) {
    return htmlString.replace('http://3.133.153.144/','https://www.blog.quinta.tech/');
  }
  return defaultImageUrl;
};

const formatDate = (dateString, language) => {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  if (language === 'en') {
    return date.toLocaleDateString('en-US', options);
  }
  return date.toLocaleDateString('es-ES', options);
};

export default Blogs;