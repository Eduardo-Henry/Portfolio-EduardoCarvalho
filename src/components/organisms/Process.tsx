import React from 'react'
import '../../styles/process.css'
import iconUnderstand from '../../assets/iconUnderstand.svg'
import iconDefine from '../../assets/iconDefine.svg'
import iconDesign from '../../assets/iconDesign.svg'
import iconValidate from '../../assets/iconValidate.svg'

const steps = [
  {
    title: 'Understand',
    copy: 'Discovery and assessment of business goals, user behaviors, and constraints that transform ideas into reality.',
    icon: iconUnderstand,
  },
  {
    title: 'Define',
    copy: 'Structure problem statements, success metrics, and guardrails to frame effective solutions.',
    icon: iconDefine,
  },
  {
    title: 'Design',
    copy: 'System-driven interfaces with accessible patterns, components, and typography.',
    icon: iconDesign,
  },
  {
    title: 'Validate',
    copy: 'Test, iterate, and refine with users and stakeholders to ensure quality and fit.',
    icon: iconValidate,
  },
]

export default function Process() {
  return (
    <section id="process" className="section process-section">
      <div className="process-parallax-layer">
        <div className="process-grid">
          <div className="process-left">
            <div className="pill">See My Personal Process</div>
            <h2 className="display section-title">
              My Design
              <br />
              Process
            </h2>
          </div>
          <div className="process-right">
            <ul className="steps">
              {steps.map(({ title, copy, icon }) => (
                <li key={title}>
                  <span className="step-icon" aria-hidden="true">
                    <img src={icon} alt="" loading="lazy" />
                  </span>
                  <div>
                    <h4>{title}</h4>
                    <p className="muted">{copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
