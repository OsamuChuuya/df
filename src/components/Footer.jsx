import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <div>
      <footer className="footer sm:footer-horizontal bg-[#212121] h-[400px] w-[1500px] mx-auto text-base-content p-20 ">
        <nav>
          <h6 className="footer-title">{t('footer.company')}</h6>
          <a className="link link-hover">{t('footer.branding')}</a>
          <a className="link link-hover">{t('footer.design')}</a>
          <a className="link link-hover">{t('footer.marketing')}</a>
          <a className="link link-hover">{t('footer.ads')}</a>
        </nav>
        <nav>
          <h6 className="footer-title">{t('footer.contact')}</h6>
          <a className="link link-hover">{t('footer.about')}</a>
          <a className="link link-hover">{t('footer.contactUs')}</a>
          <a className="link link-hover">{t('footer.jobs')}</a>
          <a className="link link-hover">{t('footer.press')}</a>
        </nav>
        <nav>
          <h6 className="footer-title">{t('footer.legal')}</h6>
          <a className="link link-hover">{t('footer.terms')}</a>
          <a className="link link-hover">{t('footer.privacy')}</a>
          <a className="link link-hover">{t('footer.cookies')}</a>
        </nav>
        <form>
          <h6 className="footer-title">{t('footer.newsletter')}</h6>
          <fieldset className="w-80">
            <label>{t('footer.emailLabel')}</label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary bg-[#FF8A00] join-item">
                {t('footer.subscribe')}
              </button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  )
}

export default Footer
