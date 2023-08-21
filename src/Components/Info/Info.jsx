import React, { useState } from 'react';
import "./Info.css"
function Info() {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="card__image-holder">
                    <img className="card__image w-100" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/17421a104128975.5f5bdc0d6d121.gif" alt="wave"
                    />
                </div>
                <div className="card-title">
                    <h2>
                        Card title
                        <small>Image from unsplash.com</small>
                    </h2>
                </div>
                <div className="card-flap ">

                    This grid is an attempt to make something nice that works on touch devices. Ignoring hover states when they're not available etc.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, repudiandae iusto? Pariatur rem, animi eos quia, culpa quam obcaecati aliquam neque cumque accusamus quibusdam, assumenda maxime autem commodi est harum.
                    Delectus voluptatem iure soluta! Voluptatibus aliquam sint mollitia natus perspiciatis sunt autem ex reprehenderit libero similique quod at officiis excepturi aperiam hic doloribus et, laudantium porro quisquam commodi. Nesciunt, culpa.
                    Laboriosam quaerat at non modi commodi quasi culpa pariatur aut nam velit harum facere doloribus nesciunt dolorem vel rerum eum officiis repudiandae, obcaecati eos tempore. Ea temporibus a deleniti quaerat.
                    Tempora laborum asperiores est illo accusamus corrupti facere? Repudiandae fuga iure iste voluptatibus velit quas nemo facere. Debitis odio qui ipsam esse nemo voluptas, accusantium, delectus repudiandae, recusandae nisi necessitatibus?
                    Dolor, repellendus maxime harum ducimus quisquam possimus obcaecati cupiditate reiciendis dolores commodi architecto incidunt eos dicta ea fuga est molestias delectus voluptatum, odio vel. Dicta inventore cupiditate laboriosam tempora tempore!


                </div>
            </div>
        </div>
    );
}

export default Info;
