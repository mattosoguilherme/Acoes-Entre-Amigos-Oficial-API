import { MailerService } from '@nestjs-modules/mailer';
import { OnQueueActive, OnQueueCompleted, OnQueueProgress, Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { CreateUserDto } from '../dto/create-user.dto';

@Processor('sendMail-queue')
export class SendMailConsumer {
  constructor(private mailService: MailerService) {}

  @Process('sendMail-job')
  async sendMailJob({ data }: Job<CreateUserDto>) {
    await this.mailService.sendMail({
      to: data.email,
      from: ' Equipe suporte Ação Entre Amigos Oficial <no-replay@aeaoficial.com> ',
      subject: 'Seja Bem Vindo(a)',
      html: `
            
            <h1>
            <strong> Aqui irá html básico com link de confirmação de email <strong/>
            <h1/>    


            `,
    });
  }

  @OnQueueCompleted()
  OnCompleted(job: Job) {
    try {
      console.log(`
   Email enviado.
   Etapa: ${job.name}
   `);

      console.log(' *-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-**-');

      console.log(`
   
    Relatório completo: 
        ${job.data}

       
   `);

      console.log(' *-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-**-');

      console.log(`
   minha curiosidade

   
        ${job}
   
   
   `);
    } catch {
      console.log(`
        Deu ruim:
        ${job}
        
        `);
    }
  }

  @OnQueueProgress()
    OnProgress(job: Job) {
          try {
      console.log(`
   Email em progresso.
   Etapa: ${job.name}
   `);

      console.log(' *-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-**-');

      console.log(`
   
    Relatório completo: 
        ${job.data}

       
   `);

      console.log(' *-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-**-');

      console.log(`
   minha curiosidade

   
        ${job}
   
   
   `);
    } catch {
      console.log(`
        Deu ruim:
        ${job}
        
        `);
    }
    }
  
    @OnQueueActive()
    OnActive(job: Job) {
        try {
            console.log(`
         Email em fila.
         Etapa: ${job.name}
         `);
      
            console.log(' *-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-**-');
      
            console.log(`
         
          Relatório completo: 
              ${job.data}
      
             
         `);
      
            console.log(' *-*-*-*-*-*-*-*-*-*-**-*-*-*-*-*-*-*-*-*-*-**-');
      
            console.log(`
         minha curiosidade
      
         
              ${job}
         
         
         `);
          } catch {
            console.log(`
              Deu ruim:
              ${job}
              
              `);
          }
    }
}
