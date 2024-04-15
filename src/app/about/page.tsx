import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className='max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl font-bold mb-8 text-center'>
        About Annie Hetrick-Dahm
      </h1>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className='md:w-1/2'>
          <Image
            src='/harmony.jpeg'
            alt='Annie Hetrick-Dahm'
            width={400}
            height={500}
            className='w-full h-auto rounded-lg shadow-md'
          />
        </div>
        <div className='md:w-1/2'>
          <p className='mb-6 text-lg leading-relaxed'>
            Annie Hetrick-Dahm is a 30-year-old from Los Angeles navigating the
            worlds of architecture and art every day. Architecture provides
            stability amidst chaos, while painting serves as a sanctuary for
            emotional exploration.
          </p>
          <p className='mb-6 text-lg leading-relaxed'>
            With a passion for storytelling, Annie examines themes of
            femininity, nature, and architecture. She aims to evoke wonder and
            introspection in the viewer through vivid colors, optical art, and
            surrealism. Her fascination with op art adds an intriguing dimension
            to her work, challenging perceptions and inviting viewers to see the
            world through a new lens.
          </p>
          <p className='mb-6 text-lg leading-relaxed'>
            Blurring reality and imagination, her paintings explore the
            complexities of the mind, revealing resilience and vulnerability.
            Her work often explores the nuances of the female experience,
            capturing both its strength and vulnerability with grace and
            sensitivity.
          </p>
          <p className='mb-6 text-lg leading-relaxed'>
            Annie&apos;s work reflects her inner thoughts, inviting
            self-discovery. Passionate about art, she seeks to inspire and
            provoke conversations, pursuing opportunities like grants,
            residencies, and gallery showcases.
          </p>
          <p className='text-lg leading-relaxed'>
            Annie is also the creator and designer of{' '}
            <a
              href='https://anniehetrickdahm.art/shop'
              className='text-blue-600 hover:text-blue-400'
            >
              Pop Architecture
            </a>
            : a brand of pop-art and architectural products for the everyday.
            Part art and architecture, Pop Architecture is the one-stop shop for
            any designer or appreciator to elevate their basics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
