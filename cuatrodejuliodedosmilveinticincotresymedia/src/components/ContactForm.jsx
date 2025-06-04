import { useState } from 'react';
import { toast } from 'react-toastify';

function ContactForm() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};
    if (!form.nombre) err.nombre = 'El nombre es requerido';
    if (!form.email) err.email = 'El correo es requerido';
    else if (!/\S+@\S+\.\S+/.test(form.email)) err.email = 'Correo inválido';
    if (!form.mensaje) err.mensaje = 'El mensaje es requerido';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
    } else {
      toast.success('Formulario enviado con éxito');
      setForm({ nombre: '', email: '', mensaje: '' });
      setErrors({});
    }
  };

  return (
    <section className="contact-form">
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          />
          {errors.nombre && <p>{errors.nombre}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>Mensaje</label>
          <textarea
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
          />
          {errors.mensaje && <p>{errors.mensaje}</p>}
        </div>

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
