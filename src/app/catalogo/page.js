import { permanentRedirect } from "next/navigation";

export default function CatalogoRedirect() {
    permanentRedirect('/productos');
}
