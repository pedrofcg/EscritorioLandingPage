import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Send, CheckCircle, AlertCircle, Settings } from 'lucide-react';

export default function LeadForm() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            if (!supabase) {
                throw new Error('Supabase client not initialized. Missing credentials.');
            }

            const { error: supabaseError } = await supabase
                .from('leads')
                .insert([
                    {
                        name: formData.name,
                        whatsapp: formData.whatsapp,
                        email: formData.email
                    }
                ]);

            if (supabaseError) throw supabaseError;

            setSuccess(true);
            setFormData({ name: '', whatsapp: '', email: '' });
        } catch (err: any) {
            console.error('Error submitting form:', err);
            setError('Ocorreu um erro ao enviar. Por favor, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center animate-fade-in">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Recebemos seu contato!</h3>
                <p className="text-green-700">Em breve nossa equipe entrará em contato com você.</p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-4 text-green-600 hover:text-green-800 font-medium underline"
                >
                    Enviar outro contato
                </button>
            </div>
        );
    }

    if (!supabase) {
        return (
            <div className="bg-amber-50 p-6 rounded-xl shadow-lg border border-amber-200 text-center">
                <Settings className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Configuração Necessária</h3>
                <p className="text-amber-700 mb-4">
                    As credenciais do Supabase não foram encontradas.
                </p>
                <div className="text-sm text-amber-800/80 bg-amber-100 p-3 rounded text-left overflow-x-auto">
                    <p className="font-mono">Crie um arquivo .env na raiz do projeto com:</p>
                    <pre className="mt-2">
                        VITE_SUPABASE_URL=...
                        VITE_SUPABASE_ANON_KEY=...
                    </pre>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-lg border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Fale com um especialista</h3>

            {error && (
                <div className="bg-red-50 p-3 rounded-md flex items-center gap-2 text-red-700 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    {error}
                </div>
            )}

            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="Seu nome"
                />
            </div>

            <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700 mb-1">WhatsApp</label>
                <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="(00) 00000-0000"
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all"
                    placeholder="seu@email.com"
                />
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent hover:bg-sky-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? 'Enviando...' : (
                    <>
                        Solicitar Contato
                        <Send className="w-4 h-4" />
                    </>
                )}
            </button>

            <p className="text-xs text-slate-500 text-center mt-4">
                Seus dados estão seguros conosco.
            </p>
        </form>
    );
}
