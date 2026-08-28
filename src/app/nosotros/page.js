import { permanentRedirect } from "next/navigation";

// 308 permanente: estas URLs de la versión anterior del sitio no vuelven, así que
// conviene que Google transfiera el posicionamiento a la home y las desindexe.
export default function NosotrosRedirect() {
    permanentRedirect('/#nosotros');
}
