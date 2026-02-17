'use client';

import Link from 'next/link';
import Image from 'next/image';
import NetworkBackground from '@/components/NetworkBackground';

export default function Home() {
  const talentPillars = [
    { title: 'Build & Deploy AI Systems', desc: 'Production-ready AI from prototype to scale' },
    { title: 'AI-Native Teams at Scale', desc: 'Dedicated experts embedded in your organization' },
    { title: 'Secure, Governed, Production-Ready', desc: 'Enterprise-grade compliance and security' },
    { title: 'Human-in-the-Loop Where It Matters', desc: 'AI with appropriate human oversight' },
  ];

  const aiUseCases = [
    { title: 'AI for Operations', desc: 'Streamline workflows and automate processes' },
    { title: 'AI for Public Sector & Smart Cities', desc: 'Vision 2030 aligned government solutions' },
    { title: 'AI for Enterprise Modernisation', desc: 'Transform legacy systems with AI' },
    { title: 'AI for Data & Automation', desc: 'Unlock insights and automate decisions' },
  ];

  const stats = [
    { number: '80,000+', label: 'Elite talent in our network' },
    { number: '50+', label: 'Businesses served' },
    { number: '90%', label: 'Outsourced, vetted experts' },
    { number: '98%', label: 'Client retention' },
  ];

  const technologies = [
    {
      name: 'Cloud & AI Platforms',
      tools: [
        { name: 'AWS', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167z"/></svg> },
        { name: 'Azure', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M5.483 21.3H24L14.025 4.013l-3.038 8.347 5.836 6.938L5.483 21.3zM13.23 2.7L6.105 8.677 0 19.253h5.505l7.725-16.553z"/></svg> },
        { name: 'GCP', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-8.825-6.893zM8.073 19.807a4.964 4.964 0 0 1-2.262-1.69c-2.187-2.754-.376-6.463 2.925-6.463h.07a3.016 3.016 0 0 1 2.156.907 3.03 3.03 0 0 1 .895 2.163v4.283a4.927 4.927 0 0 1-.9.8z"/></svg> },
      ],
    },
    {
      name: 'Large Language Models',
      tools: [
        { name: 'OpenAI', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.677l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg> },
        { name: 'Claude', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm3.5-5c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg> },
        { name: 'Meta AI', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"/></svg> },
      ],
    },
    {
      name: 'Data & BI Platforms',
      tools: [
        { name: 'Tableau', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M11.654 5.12V2.808h.704V5.12h2.304v.704h-2.304v2.308h-.704V5.824H9.348v-.704zm-6.076 5.22V7.516h.88V10.34h2.88v.876h-2.88v2.824h-.88v-2.824h-2.88v-.876zm12.796 0V7.516h.88V10.34h2.88v.876h-2.88v2.824h-.88v-2.824h-2.88v-.876zm-6.348 5.78v-3.612h.704v3.612h2.304v.704h-2.304v2.308h-.704v-2.308H9.722v-.704zM3.124 12.36V9.04h.88v3.32h3.28v.88h-3.28v3.32h-.88v-3.32H0v-.88zm17.996 0V9.04h.88v3.32h2.98v.88h-2.98v3.32h-.88v-3.32h-3.28v-.88zM12.026.44V0h.704v.44h.44v.704h-.44v.44h-.704v-.44h-.44V.44zm0 21.544v-.44h.704v.44h.44v.704h-.44V23h-.704v-.312h-.44v-.704zm-5.88-5.88v-.44h.704v.44h.44v.704h-.44v.44h-.704v-.44h-.44v-.704zm11.76 0v-.44h.704v.44h.44v.704h-.44v.44h-.704v-.44h-.44v-.704zm-5.88-11.76v-.44h.704v.44h.44v.704h-.44v.44h-.704v-.44h-.44v-.704zM6.146 4.344v-.44h.704v.44h.44v.704h-.44v.44h-.704v-.44h-.44v-.704zm11.76 0v-.44h.704v.44h.44v.704h-.44v.44h-.704v-.44h-.44v-.704z"/></svg> },
        { name: 'Power BI', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M10.008 3.083V21.25h4v-18.167zm-4 6v12.167h4V9.083zm-4 4.834V21.25h4v-7.333zm12-4.834V21.25h4V9.083zm4 4.834V21.25h4v-7.333z"/></svg> },
        { name: 'Snowflake', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12.025 2.054L12 2.053v-.002l-.025.003-.02.002-.025.004-.02.004-.025.006-.02.006-.023.007-.02.008-.023.01-.02.01-.02.01-.02.012-.02.012-.018.013-.02.014-.016.014-.018.015-.016.016-.016.016-.016.017-.014.018-.015.018-.013.018-.012.02-.012.02-.01.02-.01.02-.01.022-.008.022-.007.022-.006.023-.005.023-.004.024-.003.024-.002.025-.001.025v.025l.001.026.002.025.003.025.005.025.005.024.007.024.008.023.009.023.01.023.011.022.012.021.013.021.014.02.015.02.016.02.017.018.018.018.019.017.02.016.02.015.021.015.022.013.023.013.023.011.024.01.024.01.025.008.025.007.026.005.026.004.027.003.027.001h.027l.027-.001.027-.003.026-.004.026-.005.025-.007.025-.008.024-.01.024-.01.023-.011.023-.013.022-.013.021-.015.02-.015.02-.016.019-.017.018-.018.017-.018.016-.02.015-.02.014-.02.013-.021.012-.021.011-.022.01-.023.009-.023.008-.023.007-.024.005-.024.005-.025.003-.025.002-.025.001-.026v-.025l-.001-.025-.002-.025-.003-.024-.004-.024-.005-.023-.006-.023-.007-.022-.008-.022-.01-.022-.01-.02-.01-.02-.012-.02-.012-.02-.013-.018-.014-.018-.015-.018-.016-.017-.016-.016-.016-.016-.018-.015-.018-.014-.02-.013-.02-.012-.02-.012-.02-.01-.02-.01-.023-.01-.02-.008-.023-.007-.02-.006-.025-.006-.02-.004-.025-.004-.02-.002zm-5.96 3.391l-.025.004-.02.004-.024.007-.02.006-.022.008-.02.01-.022.01-.018.012-.02.012-.018.014-.018.014-.016.016-.017.016-.015.018-.014.018-.014.02-.012.02-.01.02-.01.022-.01.022-.007.023-.006.023-.005.024-.004.025-.002.025-.001.026v7.5l.001.026.002.025.004.025.005.024.006.023.007.023.01.022.01.022.01.02.012.02.014.02.014.018.015.018.017.016.016.016.018.014.018.014.02.012.018.012.022.01.02.01.022.008.02.006.024.007.02.004.025.004.026.002h.026l.026-.002.025-.004.024-.004.024-.007.022-.006.022-.008.02-.01.02-.01.02-.012.018-.012.018-.014.017-.014.016-.016.015-.016.014-.018.014-.018.012-.02.012-.02.01-.02.009-.022.008-.022.006-.023.006-.023.004-.024.003-.025.002-.025V5.554l-.001-.026-.002-.025-.003-.025-.004-.024-.006-.023-.006-.023-.008-.022-.009-.022-.01-.02-.012-.02-.012-.02-.014-.018-.014-.018-.015-.016-.016-.016-.017-.014-.018-.014-.018-.012-.02-.012-.02-.01-.02-.01-.022-.008-.022-.006-.024-.007-.024-.004-.025-.004-.026-.002-.026-.001-.026.001zm11.92 0l-.026.001-.026.002-.025.004-.024.004-.024.007-.022.006-.022.008-.02.01-.02.01-.02.012-.018.012-.018.014-.017.014-.016.016-.015.016-.014.018-.014.018-.012.02-.012.02-.01.02-.009.022-.008.022-.006.023-.006.023-.004.024-.003.025-.002.025-.001.026v7.5l.001.026.002.025.003.025.004.024.006.023.006.023.008.022.009.022.01.02.012.02.012.02.014.018.014.018.015.016.016.016.017.014.018.014.018.012.02.012.02.01.02.01.022.008.022.006.024.007.024.004.025.004.026.002h.026l.026-.002.025-.004.02-.004.024-.007.02-.006.022-.008.02-.01.022-.01.018-.012.02-.012.018-.014.018-.014.016-.016.017-.016.015-.018.014-.018.014-.02.012-.02.01-.02.01-.022.01-.022.007-.023.006-.023.005-.024.004-.025.002-.025.001-.026v-7.5l-.001-.026-.002-.025-.004-.025-.005-.024-.006-.023-.007-.023-.01-.022-.01-.022-.01-.02-.012-.02-.014-.02-.014-.018-.015-.018-.017-.016-.016-.016-.018-.014-.018-.014-.02-.012-.018-.012-.022-.01-.02-.01-.022-.008-.02-.006-.024-.007-.02-.004-.025-.004-.026-.002zm-8.938 2.92l-.023.003-.022.004-.022.006-.022.007-.02.009-.02.01-.02.012-.018.013-.017.014-.016.016-.016.016-.014.018-.013.018-.012.02-.01.02-.01.022-.008.022-.006.022-.005.024-.004.024-.002.024-.001.025v4.5l.001.025.002.024.004.024.005.024.006.022.008.022.01.022.01.02.012.02.013.018.014.018.016.016.016.016.017.014.018.013.02.012.02.01.02.009.022.007.022.006.022.004.023.003.024.002h.024l.024-.002.023-.003.022-.004.022-.006.022-.007.02-.009.02-.01.02-.012.018-.013.017-.014.016-.016.016-.016.014-.018.013-.018.012-.02.01-.02.01-.022.008-.022.006-.022.005-.024.004-.024.002-.024.001-.025v-4.5l-.001-.025-.002-.024-.004-.024-.005-.024-.006-.022-.008-.022-.01-.022-.01-.02-.012-.02-.013-.018-.014-.018-.016-.016-.016-.016-.017-.014-.018-.013-.02-.012-.02-.01-.02-.009-.022-.007-.022-.006-.022-.004-.023-.003-.024-.002h-.024zm5.913 0l-.023.003-.022.004-.022.006-.022.007-.02.009-.02.01-.02.012-.018.013-.017.014-.016.016-.016.016-.014.018-.013.018-.012.02-.01.02-.01.022-.008.022-.006.022-.005.024-.004.024-.002.024-.001.025v4.5l.001.025.002.024.004.024.005.024.006.022.008.022.01.022.01.02.012.02.013.018.014.018.016.016.016.016.017.014.018.013.02.012.02.01.02.009.022.007.022.006.022.004.023.003.024.002h.024l.024-.002.023-.003.022-.004.022-.006.022-.007.02-.009.02-.01.02-.012.018-.013.017-.014.016-.016.016-.016.014-.018.013-.018.012-.02.01-.02.01-.022.008-.022.006-.022.005-.024.004-.024.002-.024.001-.025v-4.5l-.001-.025-.002-.024-.004-.024-.005-.024-.006-.022-.008-.022-.01-.022-.01-.02-.012-.02-.013-.018-.014-.018-.016-.016-.016-.016-.017-.014-.018-.013-.02-.012-.02-.01-.02-.009-.022-.007-.022-.006-.022-.004-.023-.003-.024-.002h-.024zm-2.96 2.888l-.023.004-.022.005-.022.007-.02.009-.02.01-.02.012-.018.013-.017.015-.016.016-.014.017-.014.018-.012.02-.011.02-.01.021-.008.022-.006.023-.005.023-.003.024-.002.025v1.5l.002.025.003.024.005.023.006.023.008.022.01.021.011.02.012.02.014.018.014.017.016.016.017.015.018.013.02.012.02.01.02.009.022.007.022.005.023.004.024.002h.024l.024-.002.023-.004.022-.005.022-.007.02-.009.02-.01.02-.012.018-.013.017-.015.016-.016.014-.017.014-.018.012-.02.011-.02.01-.021.008-.022.006-.023.005-.023.003-.024.002-.025v-1.5l-.002-.025-.003-.024-.005-.023-.006-.023-.008-.022-.01-.021-.011-.02-.012-.02-.014-.018-.014-.017-.016-.016-.017-.015-.018-.013-.02-.012-.02-.01-.02-.009-.022-.007-.022-.005-.023-.004-.024-.002h-.024zm0 4l-.023.003-.022.005-.022.007-.02.008-.02.01-.02.012-.018.013-.017.014-.016.016-.014.017-.014.019-.012.019-.011.02-.01.022-.008.022-.006.022-.005.024-.003.024-.002.025v1.5l.002.025.003.024.005.024.006.022.008.022.01.022.011.02.012.019.014.019.014.017.016.016.017.014.018.013.02.012.02.01.02.008.022.007.022.005.023.003.024.002h.024l.024-.002.023-.003.022-.005.022-.007.02-.008.02-.01.02-.012.018-.013.017-.014.016-.016.014-.017.014-.019.012-.019.011-.02.01-.022.008-.022.006-.022.005-.024.003-.024.002-.025v-1.5l-.002-.025-.003-.024-.005-.024-.006-.022-.008-.022-.01-.022-.011-.02-.012-.019-.014-.019-.014-.017-.016-.016-.017-.014-.018-.013-.02-.012-.02-.01-.02-.008-.022-.007-.022-.005-.023-.003-.024-.002h-.024z"/></svg> },
      ],
    },
    {
      name: 'AI Deployment',
      tools: [
        { name: 'MLflow', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 0L1.5 6v12L12 24l10.5-6V6zm0 2.311l8.4 4.8v9.6l-8.4 4.8-8.4-4.8v-9.6zM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg> },
        { name: 'Kubernetes', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623zm1.812-2.052a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.373-.775l-.006-.022-1.23-4.318-.003-.011a1.36 1.36 0 0 0-.59-.725l-3.733-2.156-.01-.005a1.37 1.37 0 0 0-.94-.085l-4.313 1.228-.027.008a1.38 1.38 0 0 0-.725.59l-2.156 3.733-.005.01a1.36 1.36 0 0 0-.085.939l1.228 4.314.008.027a1.36 1.36 0 0 0 .59.725l3.733 2.156.01.006c.292.17.636.205.94.084l4.313-1.228.027-.008a1.36 1.36 0 0 0 .724-.59l2.157-3.732.005-.01a1.38 1.38 0 0 0 .085-.94zm-3.796 4.952a.56.56 0 0 1-.3.243l-3.53 1.006a.56.56 0 0 1-.386-.035l-3.058-1.765a.56.56 0 0 1-.243-.3l-1.006-3.53a.56.56 0 0 1 .035-.387l1.765-3.058a.56.56 0 0 1 .3-.243l3.53-1.006a.56.56 0 0 1 .386.035l3.058 1.765a.56.56 0 0 1 .243.3l1.006 3.53a.56.56 0 0 1-.035.387zm-2.08-5.49a.44.44 0 0 0-.174.756l.002.01 1.961 1.754a5.21 5.21 0 0 0-.73-3.255l-2.514.725-.002.01zm1.313 4.132l.004-.004-2.576-.438a5.135 5.135 0 0 1-2.075 2.597l.999 2.412.007-.01a.44.44 0 0 0 .786-.195l-.003-.01 2.856-.357.002.005z"/></svg> },
        { name: 'Docker', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.084.185.185.185m-2.92 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.186.186 0 0 0-.185.185v1.888c0 .102.084.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 0 0-.75.748 11.376 11.376 0 0 0 .692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 0 0 3.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg> },
      ],
    },
    {
      name: 'Enterprise Security',
      tools: [
        { name: 'Okta', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 0C5.389 0 0 5.389 0 12s5.389 12 12 12 12-5.389 12-12S18.611 0 12 0zm0 18c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"/></svg> },
        { name: 'Auth0', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M21.98 7.448L19.62 0H4.347L2.02 7.448c-1.352 4.312.03 9.206 3.815 12.015L12.007 24l6.157-4.552c3.755-2.81 5.182-7.688 3.815-12.015l-6.16 4.58 2.343 7.45-6.157-4.597-6.158 4.58 2.358-7.433-6.188-4.55 7.63-.045L12.008 0l2.356 7.404 7.615.044z"/></svg> },
        { name: 'Azure AD', icon: <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.236l7.412 3.706L12 11.65 4.588 7.942 12 4.236zM4 16.236V9.157l7 3.5v7.107l-7-3.528zm9 3.528v-7.107l7-3.5v7.08l-7 3.527z"/></svg> },
      ],
    },
  ];

  const expertRoles = [
    'AI Engineers & Machine Learning Engineers',
    'Data Scientists & Applied AI Specialists',
    'AI Product Managers',
    'MLOps & AI Infrastructure Engineers',
    'Computer Vision & NLP Specialists',
    'AI Architects & Technical Leads',
  ];

  const experts = [
    { initials: 'SC', name: 'Sarah Chen', role: 'Senior AI Engineer', company: 'Previously at Google', location: 'San Francisco', rating: '4.9', skills: ['React', 'Node.js'] },
    { initials: 'MW', name: 'Marcus Williams', role: 'Product Manager', company: 'Previously at Meta', location: 'New York', rating: '4.8', skills: ['Product Strategy', 'Data Analytics'] },
    { initials: 'ER', name: 'Emily Rodriguez', role: 'UX Design Lead', company: 'Previously at Apple', location: 'Austin', rating: '5', skills: ['User Research', 'Figma'] },
    { initials: 'JP', name: 'James Park', role: 'Investment Analyst', company: 'Previously at Goldman Sachs', location: 'Chicago', rating: '4.9', skills: ['Financial Modeling', 'M&A'] },
  ];

  const processSteps = [
    { step: 'Define', desc: 'align on outcomes and priorities' },
    { step: 'Embed', desc: 'deploy dedicated AI teams' },
    { step: 'Build', desc: 'develop integrated systems' },
    { step: 'Operate', desc: 'ensure reliability in production' },
    { step: 'Scale', desc: 'expand with governance' },
  ];

  const clients = [
    { name: 'Riyad Capital', logo: '/clients/Riyad-Capital-Logo.png', url: 'https://www.riyadcapital.com/en/' },
    { name: 'Ministry of Health', logo: '/clients/Saudi-Ministry-of-Health-Logo.png', url: 'https://www.moh.gov.sa/en' },
    { name: 'Arab Bank', logo: '/clients/Arab-Bank-Logo.png', url: 'https://www.arabbank.com/' },
    { name: 'Tadawul', logo: '/clients/Saudi-Tadawul-Logo.png', url: 'https://www.saudiexchange.sa/' },
    { name: 'NCB Capital', logo: '/clients/NCB-Capital-Logo.png', url: 'https://www.alahlicapital.com/' },
    { name: 'Vision 2030', logo: '/clients/Vision-2023-Logo.png', url: 'https://www.vision2030.gov.sa/' },
    { name: 'Multinational Consulting Firms', logo: '/clients/Multinational-Consulting-Firms.png', url: null },
    { name: 'Jadwa Investment', logo: '/clients/Jadwa-Investment-Logo.png', url: 'https://www.jadwa.com/' },
    { name: 'Herald Investment', logo: '/clients/Herald-Investment-Management-Logo.png', url: 'https://www.heralduk.com/' },
    { name: 'Public Pension Agency', logo: '/clients/Public-Pension-Agency-Logo-Wide.png', url: 'https://www.pension.gov.sa/' },
    { name: 'Emirates NBD', logo: '/clients/Emirates-NBD-Logo-Wide.png', url: 'https://www.emiratesnbd.com.sa/' },
    { name: 'Elm', logo: '/clients/ELM-Logo-Wide.png', url: 'https://www.elm.sa/en' },
    { name: 'Bank Al Jazira', logo: '/clients/Bank-Al-Jazira-Logo-Wide.png', url: 'https://www.bankaljazira.com/en-us' },
    { name: 'Blom Bank', logo: '/clients/Blom-Bank-Logo.png', url: 'https://www.blombank.com/' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-dark bg-grid-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-900 to-dark-800" />
        <NetworkBackground nodeCount={70} maxDistance={130} />
        <div className="relative max-w-section mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="section-label !text-primary-500 !mb-6">Future Systems for Information Technology</p>
            <h1 className="hero-title text-white">
              On-Site AI.<br />
              <span className="text-primary-500">Real Results.</span><br />
              Built Capability.
            </h1>
            <p className="text-xl md:text-2xl text-dark-300 mb-4">
              Executing AI transformation across Saudi Arabia and the Middle East
            </p>
            <p className="hero-subtitle">
              AI-native teams delivering production-ready systems across government and enterprise
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Talk to our AI delivery team
              </Link>
              <Link href="/build-scale-ai" className="btn-secondary !border-white/30 !text-white hover:!bg-white hover:!text-dark-900">
                Start with a pilot
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-neutral-150 border-b border-neutral-200">
        <div className="max-w-section mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-dark-700 mb-10">Trusted By Leading Organizations</p>
        </div>
        <div className="relative overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing">
          <div className="flex animate-scroll hover:pause-animation px-4 min-w-max">
            {/* First set of logos */}
            {clients.map((client, index) => (
              client.url ? (
                <a
                  key={`first-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-all mx-4 flex items-center justify-center h-32 w-64"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </a>
              ) : (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 mx-4 flex items-center justify-center h-32 w-64"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </div>
              )
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              client.url ? (
                <a
                  key={`second-${index}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-all mx-4 flex items-center justify-center h-32 w-64"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </a>
              ) : (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 mx-4 flex items-center justify-center h-32 w-64"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={200}
                    height={100}
                    className="object-contain max-h-20"
                  />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Leverage Top 1% AI Talent Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title">Leverage the Top 1% of AI Talent, On-Demand</h2>
          </div>
          <div className="grid-4">
            {talentPillars.map((pillar, index) => (
              <div key={index} className="card card-hover text-center">
                <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center text-primary-500 mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-dark-900 mb-2">{pillar.title}</h3>
                <p className="text-dark-500 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How FSIT Works */}
      <section className="section-padding bg-dark-900 text-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title !text-white">How FSIT Works</h2>
            <p className="text-xl text-primary-500 font-semibold mt-4">
              Define → Embed → Build → Operate → Scale
            </p>
          </div>

          <div className="flex justify-center items-start gap-2 md:gap-4 mb-16">
            {processSteps.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="text-center px-2 md:px-4 py-4">
                  <div className="w-10 h-10 md:w-14 md:h-14 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg mx-auto mb-3">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-white mb-1 text-sm md:text-base">{item.step}</p>
                  <p className="text-xs text-dark-400 max-w-[120px] md:max-w-[150px]">{item.desc}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-4 md:w-8 h-px bg-dark-700 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* AI Use Cases */}
          <div className="grid-4 max-w-5xl mx-auto">
            {aiUseCases.map((useCase, index) => (
              <div key={index} className="bg-dark-800 rounded-2xl p-6 border border-dark-700 hover:border-primary-500 transition-all">
                <h3 className="font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-dark-400 text-sm">{useCase.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Aligned with Vision 2030 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-title">Aligned with Vision 2030</h2>
            <p className="section-subtitle mx-auto">
              With a strong regional presence and global reach, FSIT supports national transformation initiatives and enterprise AI programs
            </p>
          </div>

          <div className="bg-neutral-150 rounded-2xl p-8 border border-neutral-200">
            <p className="text-center text-sm font-semibold text-dark-700 mb-8">Globally Recognized Technologies</p>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-xl p-5 border border-neutral-200 text-center min-w-[160px] flex-1 max-w-[200px]">
                  <h4 className="font-semibold text-dark-900 text-sm mb-4">{tech.name}</h4>
                  <div className="flex justify-center gap-3">
                    {tech.tools.map((tool, i) => (
                      <div key={i} className="text-dark-500 hover:text-primary-500 transition-colors" title={tool.name}>
                        {tool.icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-500">
        <div className="container-max">
          <p className="text-center text-white/80 text-sm mb-8">
            We are working extensively to build a vetted network of talents available at short notice
          </p>
          <div className="grid-4 stagger-children">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-white">{stat.number}</p>
                <p className="text-white/80 text-sm mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="section-title">Meet Some of Our Experts</h2>
            <p className="section-subtitle mx-auto">
              A network of pre-vetted, technical experts ready to seamlessly integrate into your organisation
            </p>
          </div>

          <div className="grid-4 mb-12">
            {experts.map((expert, index) => (
              <div key={index} className="card card-hover">
                <div className="w-16 h-16 bg-primary-500/10 rounded-full flex items-center justify-center text-primary-500 font-bold text-xl mx-auto mb-4">
                  {expert.initials}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-dark-900">{expert.name}</h3>
                  <p className="text-dark-500 text-sm">{expert.role}</p>
                  <p className="text-dark-400 text-xs mt-1">{expert.company}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <span className="text-xs text-dark-400">{expert.location}</span>
                    <span className="text-xs text-gold-500">★ {expert.rating}</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1 mt-3">
                    {expert.skills.map((skill, i) => (
                      <span key={i} className="text-xs bg-neutral-150 text-dark-600 px-2 py-1 rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expert Roles */}
          <div className="bg-white rounded-2xl p-8 border border-neutral-200">
            <div className="flex flex-wrap justify-center gap-3">
              {expertRoles.map((role, index) => (
                <span key={index} className="bg-dark-900 text-white px-4 py-2 rounded-pill text-sm font-medium">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid-2 items-center">
            <div>
              <p className="section-label">Case Study</p>
              <h2 className="section-title">AI Operations Copilot</h2>
              <p className="text-dark-500 mb-6">
                Secure, Vision 2030–aligned AI that automates workflows, unlocks institutional knowledge, and accelerates decision-making for a Saudi Government Entity.
              </p>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="text-5xl font-bold text-primary-500">-45%</span>
                <span className="text-dark-500">manual processing time</span>
              </div>
              <Link href="/solutions" className="btn-ghost">
                View more case studies
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-neutral-150 rounded-2xl p-8 md:p-12 border border-neutral-200">
              <div className="space-y-4">
                {['Workflow automation', 'Knowledge management', 'Decision intelligence', 'Governance compliant'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Organizations Choose FSIT */}
      <section className="section-padding bg-neutral-150">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="section-title">Why Organizations Choose FSIT</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { title: 'AI-first augmented intelligence model', desc: 'Not traditional IT services' },
              { title: 'Proven delivery', desc: 'Enterprise and government environments' },
              { title: 'Hybrid approach', desc: 'Embedded AI talent and managed services' },
              { title: 'Faster execution', desc: 'Than consulting-led engagements' },
              { title: 'Focus on measurable outcomes', desc: 'Not proofs of concept' },
            ].map((item, index) => (
              <div key={index} className="card card-hover text-center">
                <h3 className="font-semibold text-dark-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-dark-500 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-900">
        <div className="container-max text-center">
          <h2 className="section-title !text-white mb-4">
            Ready to build AI that actually runs?
          </h2>
          <p className="section-subtitle mx-auto !text-dark-300 mb-8">
            Talk to our AI delivery team and start your transformation today
          </p>
          <Link href="/build-scale-ai" className="btn-primary">
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
