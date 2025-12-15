import React from 'react';
import { Section } from '../ui/Section';
import { Mail, MapPin, Clock as ClockIcon, Calendar, ArrowRight, ExternalLink } from '../ui/Icons';
import { CONTACT_LINKS } from '../../data/consts';

export const Contact = () => {
    return (
        <Section id="contacto" title="Contacto" titleCenter={false}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
                {/* Formulario */}
                <div className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800">
                    <h3 className="text-2xl font-bold text-white mb-2">Cuéntame sobre tu proyecto</h3>
                    <p className="text-zinc-400 text-sm mb-6">Completa el formulario para preparar una propuesta ajustada.</p>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-zinc-400 mb-1">Nombre *</label>
                                <input type="text" placeholder="Tu nombre completo" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-zinc-600" />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-zinc-400 mb-1">Email *</label>
                                <input type="email" placeholder="tu@email.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-zinc-600" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-zinc-400 mb-1">Empresa / Organización</label>
                            <input type="text" placeholder="Nombre de tu empresa (opcional)" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-zinc-600" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-zinc-400 mb-1">Tipo de proyecto *</label>
                                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none text-zinc-300">
                                    <option>Selecciona el tipo</option>
                                    <option>Web Design</option>
                                    <option>Development</option>
                                    <option>Branding</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-zinc-400 mb-1">Presupuesto aprox.</label>
                                <select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none text-zinc-300">
                                    <option>Selecciona un rango</option>
                                    <option>€500 - €1000</option>
                                    <option>€1000 - €3000</option>
                                    <option>+€3000</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-zinc-400 mb-1">Cuéntame sobre tu proyecto *</label>
                            <textarea rows="4" placeholder="Describe tu proyecto: objetivos, audiencia, estilo preferido..." className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-colors placeholder-zinc-600"></textarea>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>

                {/* Info de contacto */}
                <div className="space-y-8">
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-blue-500"><ClockIcon className="w-6 h-6" /></div>
                            <div>
                                <h4 className="font-bold text-white">Respuesta en 24h</h4>
                                <p className="text-sm text-zinc-500">Te respondo rápidamente</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-blue-500"><Calendar className="w-6 h-6" /></div>
                            <div>
                                <h4 className="font-bold text-white">Consulta gratuita</h4>
                                <p className="text-sm text-zinc-500">Primera reunión sin costo</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 text-zinc-300">
                            <div className="p-3 bg-zinc-900 rounded-full border border-zinc-800 text-blue-500"><ArrowRight className="w-6 h-6" /></div>
                            <div>
                                <h4 className="font-bold text-white">Propuesta personalizada</h4>
                                <p className="text-sm text-zinc-500">Adaptada a tu presupuesto</p>
                            </div>
                        </div>
                    </div>

                    <div className="h-px bg-zinc-800 w-full my-8" />

                    <div>
                        <h3 className="text-3xl font-bold text-white mb-6">Información de contacto</h3>
                        <p className="text-zinc-400 mb-8">También puedes contactarme directamente a través de estos canales.</p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-blue-500 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">Ubicación</h4>
                                    <p className="text-zinc-400 text-sm">Madrid, España</p>
                                    <p className="text-zinc-500 text-xs">Trabajo tanto presencial como remoto</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-blue-500 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">Email</h4>
                                    <a href="mailto:jr.eugercios@gmail.com" className="text-blue-400 hover:underline text-sm block">jr.eugercios@gmail.com</a>
                                    <p className="text-zinc-500 text-xs">Respondo en un máximo de 24 horas</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <ClockIcon className="w-6 h-6 text-blue-500 mt-1" />
                                <div>
                                    <h4 className="text-white font-bold">Horario de atención</h4>
                                    <p className="text-zinc-400 text-sm">Lunes a Viernes: 9:00 - 15:00 (CET)</p>
                                    <p className="text-zinc-500 text-xs">Para proyectos urgentes, también fines de semana</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Links dinámicos */}
                    <div className="pt-6">
                        <h4 className="text-white font-bold mb-4">También me encuentras en</h4>
                        <div className="grid grid-cols-1 gap-3">
                            {CONTACT_LINKS.map((link) => (
                                <a key={link.id} href={link.url} className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-blue-500/50 transition-all group">
                                    <div className="flex items-center gap-3">
                                        <ExternalLink className="w-5 h-5 text-blue-500" />
                                        <div>
                                            <span className="text-white font-medium block">{link.label}</span>
                                            <span className="text-zinc-500 text-xs">{link.description}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <footer className="py-8 text-center text-zinc-600 text-sm relative z-20 border-t border-zinc-900 mt-24">
                &copy; {new Date().getFullYear()} JREdesign. Todos los derechos reservados.
            </footer>
        </Section>
    );
};
