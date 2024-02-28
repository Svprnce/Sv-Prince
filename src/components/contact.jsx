import '../styles/contact.css'
import { useForm } from 'react-hook-form';
const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm();
      
      const onSubmit = async (data) => {
        const { name, email, subject, message } = data;
        
        console.log('Name: ', name);
        console.log('Email: ', email);
        console.log('Subject: ', subject);
        console.log('Message: ', message);

        try {
            const templateParams = {
              name,
              email,
              subject,
              message
            };
            await emailjs.send(
              process.env.REACT_APP_SERVICE_ID,
              process.env.REACT_APP_TEMPLATE_ID,
              templateParams,
              process.env.REACT_APP_PUBLIC_KEY
            );
            reset();
          } catch (e) {
            console.log(e);
          }
          
      };

    return (
        <>
            <div className="contact-div border">
                <div className="text-center"><h2 className='gradient-heading'>Contact ME</h2></div>
                <form  onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="contact-details">
                    <div className="name-div">
                        <input type="text" name="name" id="name" {...register('name', {
                            required: { value: true, message: 'Please enter your name' },
                            maxLength: {
                                value: 30,
                                message: 'Please use 30 characters or less'
                            }
                        })} placeholder="Name" />
                        {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                <div className="email-div">
                <input type="email" name="email" id="email" {...register('email', {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })} placeholder="Email address" />
                      {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                </div>
                </div>
                {/* <div className="subject"> */}
                <div className="subject-div">
                <input type="text" name="subject" id="subject" {...register('subject', {
                        required: { value: true, message: 'Please enter a subject' },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })} placeholder="Subject" />
                      {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                </div>
                <div className="message-div">
                <input type="text" name="message" id="message" {...register('message', {
                        required: true
                      })} placeholder="Message" />
                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                </div>
                {/* </div> */}
                <button type='submit'>Send The Email</button>
                </form>
            </div>
        </>
    )
}
export default Contact