import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
function Footer() {
return (
    <div>
    <footer class="bg-body-tertiary text-center">
        <div class="container p-4 pb-0">
            <section class="mb-4">
                <a
                   data-mdb-ripple-init
                    class="btn text-dark btn-floating m-1"
                    href="#!"
                    role="button"><FontAwesomeIcon icon={faFacebook} />
              </a>
               <a
                    data-mdb-ripple-init
                    class="btn text-dark btn-floating m-1"
                    href="#!"
                    role="button"><FontAwesomeIcon icon={faTwitter} />
              </a>
               <a
                     data-mdb-ripple-init
                     class="btn text-dark btn-floating m-1"
                    href="#!"
                    role="button"><FontAwesomeIcon icon={faInstagram} />
              </a>
               <a
                     data-mdb-ripple-init
                    class="btn text-dark btn-floating m-1"
                    href="#!"
                    role="button"><FontAwesomeIcon icon={faGoogle} />
               </a>
                <a
                     data-mdb-ripple-init
                     class="btn text-dark btn-floating m-1"
                      href="#!"
                     role="button"><FontAwesomeIcon icon={faLinkedin} />
              </a>
               <a
                   data-mdb-ripple-init
                    class="btn text-dark btn-floating m-1"
                    href="#!"
                    role="button"><FontAwesomeIcon icon={faGithub} />
              </a>
         </section>
     </div>
          <div class="text-center p-3"> © 2020 Copyright:
              <a class="text-body" href="https://mdbootstrap.com/"> rohoEvents.com</a>
          </div>
    </footer>
    </div>
)};

export default Footer;




