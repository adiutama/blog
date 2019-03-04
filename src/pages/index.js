import React from 'react'
import classNames from 'classnames'
import moment from 'moment'

import { Helmet } from 'react-helmet'

import style from '@/styles/page.module.scss'

const article = [
  {
    title: `A beautiful blog with no images required`,
    datetime: `2018-07-24`,
    author: `Adi Utama`,
    eta: `1 Minute Read`,
    content: `Typography is a WordPress theme created for bloggers that just want to write, without the hassle of looking for the right featured image. It has a unique design based on beautiful typography and a modern, clean layout. Simply write your content and publish will handle the rest. Efficiently negotiate enabled partnerships whereas team building channels. Competently visualize cross-platform...`,
    url: `a-beautiful-blog-with-no-images-required`,
  },
  {
    title: `Now leave before I am forced to taunt you`,
    datetime: `2018-07-01`,
    author: `Adi Utama`,
    eta: `1 Minute Read`,
    content: `Credibly customize visionary niches before alternative services. Compellingly restore effective total linkage with sticky resources. Appropriately reconceptualize multifunctional leadership skills without turnkey outsourcing. Efficiently negotiate enabled partnerships whereas team building channels. Dynamically disseminate customer directed quality vectors whereas go forward potentialities. Seamlessly actualize goal-oriented methodologies whereas value-added innovation. Conveniently impact B2B manufactured products without magnetic core competencies. Synergistically...`,
    url: `now-leave-before-i-am-forced-to-taunt-you`,
  },
  {
    title: `What could possibly go wrong?`,
    datetime: `2018-06-08`,
    author: `Adi Utama`,
    eta: `1 Minute Read`,
    content: `Dynamically underwhelm integrated outsourcing via timely models. Rapidiously reconceptualize visionary imperatives without 24/365 catalysts for change. Completely streamline functionalized models and out-of-the-box functionalities. Authoritatively target proactive vortals. Globally iterate parallel content vis-a-vis just in time expertise. Collaboratively cultivate viral methods of empowerment without interactive manufactured products. Proactively exploit process-centric supply chains for distributed imperatives. Authoritatively empower error-free total...`,
    url: `what-could-possibly-go-wrong?`,
  },
  {
    title: `The simplest ways to choose the best coffee`,
    datetime: `2018-03-04`,
    author: `Adi Utama`,
    eta: `1 Minute Read`,
    content: ` Professionally mesh inexpensive experiences without empowered imperatives. Conveniently synergize turnkey e-commerce and compelling information. Credibly conceptualize installed base internal or “organic” sources through scalable mindshare. Uniquely aggregate efficient total. Objectively brand magnetic ideas with error-free interfaces. Completely orchestrate seamless manufactured products via turnkey solutions. Holisticly streamline premium strategic theme areas vis-a-vis high standards in platforms. Assertively supply mission-critical...`,
    url: `the-simplest-ways-to-choose-the-best-coffee`,
  },
]

const IndexPage = () => (
  <React.Fragment>
    <Helmet>
      <title>Adi Utama | Home</title>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous" />
    </Helmet>

    <header className={style.header}>
      <div className={style.headerWrapper}>
        <h1 className={style.headerTitle}>Typography</h1>

        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>

    <main className={style.content}>
      <div className={style.contentWrapper}>
        <h1 className={style.contentTitle}>Latest Posts</h1>

        {article.map((item, key) => (
          <section className={style.postSummary} key={key}>
            <time dateTime={item.datetime} className={style.postDate}>
              <span className={style.postDateItem}>{moment(item.datetime).format(`DD`)}</span>
              <span className={style.postDateItem}>{moment(item.datetime).format(`MMM YYYY`)}</span>
            </time>

            <article className={style.post}>
              <h1 className={style.postTitle}>
                <a href={item.url}>{item.title}</a>
              </h1>

              <aside className={style.postMeta}>
                <span className={style.postMetaItem}>By {item.author}</span>
                <span className={style.postMetaItem}>{item.eta}</span>
              </aside>

              <p>{item.content}</p>

              <a href={item.url} className={classNames(style.btn, style.btnPrimary)}>Read More</a>
            </article>
          </section>
        ))}

        <footer className={style.pagination}>
          <a href="/">&laquo; Newer</a>
          <a href="/?page=1">Older &raquo;</a>
        </footer>
      </div>
    </main>

    <footer className={style.footer}>
      <div className={style.footerWrapper}>
        <div className={style.footerLinks}>
          <a href="https://instagram.com/adiutama">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com/in/adiutamaa">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/adiutama">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://angel.co/adiutama">
            <i className="fab fa-angellist"></i>
          </a>
        </div>

        <div className={style.copyright}>
          Design By <a href="http://www.themexpose.com/">ThemeExpose</a><br />
          All rights reserved
        </div>
      </div>
    </footer>
  </React.Fragment>
)

export default IndexPage
