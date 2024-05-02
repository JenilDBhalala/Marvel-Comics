import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

// Note: use when given access to particular user
// const authenticatorMail = import.meta.env.VITE_AUTHENTICATOR_MAIL;
// const authenticatorPassword = import.meta.env.VITE_AUTHENTICATOR_PASSWORD;

// Create Supabase connection
const supabaseConnection = createClient(supabaseUrl, supabaseKey);

// Note: use when given access to particular user
// try {
//     await supabaseConnection?.auth?.signInWithPassword({  email: authenticatorMail,  password: authenticatorPassword});
// }
// catch (error) {
//     console.log(`error in supabase mail authentication, ${error}`);
// }

export default supabaseConnection;
