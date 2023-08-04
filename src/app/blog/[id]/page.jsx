import Image from 'next/image'
import styles from "./page.module.css";
import React from 'react'

const BlogPost = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h1>
        <p className={styles.desc}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem beatae optio delectus, eligendi, veniam neque tempore laborum voluptas ducimus vero repudiandae voluptates
        </p>
        <div className={styles.author}>
          <Image
            src="https://images.pexels.com/photos/16419036/pexels-photo-16419036/free-photo-of-directional-signs-with-distance-on-post.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>Op</span>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
           src="https://images.pexels.com/photos/16419036/pexels-photo-16419036/free-photo-of-directional-signs-with-distance-on-post.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          alt=""
          fill={true}
          className={styles.image}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>
       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur eius repudiandae voluptatibus quasi illum molestias adipisci, minima similique culpa beatae nulla voluptas quidem nisi dolore incidunt ex suscipit ut aut!
       Ipsum quaerat illo qui velit nostrum error numquam odit. Modi deleniti quaerat ut commodi natus consequatur, iure molestias pariatur facilis. Nihil quam magni nisi? Ipsum enim voluptates autem itaque magnam! <br></br><br></br>
       Animi, in quae quas veritatis pariatur vero quo dolor esse doloremque molestias minus laudantium ad amet porro accusamus, ullam nemo corporis culpa quisquam, soluta magnam atque consequuntur at. Nostrum, dolorum.
       Veniam tenetur officia dolorum facere eveniet tempore, ducimus omnis vitae. <br></br><br></br>Nisi aliquam obcaecati non, nostrum odio voluptatum, quisquam beatae ex, fugit totam sequi voluptatibus! Eius dolor vitae eaque enim aliquam!
       Dignissimos suscipit et sequi accusamus incidunt quis consequuntur modi assumenda quae illum enim dicta reiciendis nemo quia velit, fugit sed tenetur praesentium? Repudiandae harum sed debitis fuga et tenetur consequatur?
      </p>
    </div>
  </div>
  )
}

export default BlogPost