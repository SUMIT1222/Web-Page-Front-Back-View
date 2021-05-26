'use strict'

const Job=use('App/Models/Job')


class JobController{
    async home({view}){

        const jobs=await Job.all();
        return view.render('jobs.edge', {jobs: jobs.toJSON() });

   
    }

    async create({ request, response, session, auth}) {
        const job = request.all();

        const posted = await auth.user.jobs().create({
            title: job.username,
            
        });

        session.flash({ message: 'Your job has been posted!' });
        return response.redirect('back');
    }

    async delete({ response, session, params}) {
        const job = await Job.find(params.id);

        await job.delete();
        session.flash({ message: 'Your job has been removed'});
        return response.redirect('back');
    }

    async edit({ params, view }) {
        const job = await Job.find(params.id);
        return view.render('edit', { job: job });
    

   

        
    }

}
module.exports=JobController
   

