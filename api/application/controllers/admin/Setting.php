<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/Admin_REST_Controller.php');

class Setting extends Admin_REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get() {
        
        $data['skype'] = $this->setting_model->get('skype');
        $data['mobile'] = $this->setting_model->get('mobile');
        $data['telephone'] = $this->setting_model->get('telephone');
        $data['address'] = $this->setting_model->get('address');
        $data['map_image'] = $this->setting_model->get('map_image');
        $data['map_url'] = $this->setting_model->get('map_url');
        
        $data['name'] = $this->setting_model->get('name');
        $data['about_me'] = $this->setting_model->get('about_me');
        $data['avatar'] = $this->setting_model->get('avatar');
        $data['skills'] = $this->setting_model->get('skills');
        $data['designation'] = $this->setting_model->get('designation');

        $data['email_address'] = $this->setting_model->get('email_address');

        $data['meta_title'] = $this->setting_model->get('meta_title');
        $data['meta_content'] = $this->setting_model->get('meta_content');
        $data['meta_keywords'] = $this->setting_model->get('meta_keywords');

        $data['mail_protocol'] = $this->setting_model->get('mail_protocol');
        $data['mail_host'] = $this->setting_model->get('mail_host');
        $data['mail_username'] = $this->setting_model->get('mail_username');
        $data['mail_password'] = $this->setting_model->get('mail_password');
        $data['mail_smtp_port'] = $this->setting_model->get('mail_smtp_port');
        
        $data['thumb_url'] = site_url('upload/thumbs'); 
        $data['upload_url'] = site_url('admin/upload');
        
        $data['msg'] =$this->session->flashdata('msg');
        
        $this->response($data);
    }
    
    public function update_post() {
        
        $this->setting_model->update('skype', $this->post('skype'));
        $this->setting_model->update('mobile', $this->post('mobile'));
        $this->setting_model->update('telephone', $this->post('telephone'));
        $this->setting_model->update('address', $this->post('address'));
        $this->setting_model->update('map_image', $this->post('map_image'));
        $this->setting_model->update('map_url', $this->post('map_url'));
                
        $this->setting_model->update('name', $this->post('name'));
        $this->setting_model->update('about_me', $this->post('about_me'));
        $this->setting_model->update('avatar', $this->post('avatar'));
        $this->setting_model->update('skills', $this->post('skills'));
        $this->setting_model->update('designation', $this->post('designation'));

        $this->setting_model->update('email_address', $this->post('email_address'));

        $this->setting_model->update('meta_title', $this->post('meta_title'));
        $this->setting_model->update('meta_content', $this->post('meta_content'));
        $this->setting_model->update('meta_keywords', $this->post('meta_keywords'));
        
        $this->setting_model->update('mail_protocol', $this->post('mail_protocol'));
        $this->setting_model->update('mail_host', $this->post('mail_host'));
        $this->setting_model->update('mail_username', $this->post('mail_username'));
        $this->setting_model->update('mail_password', $this->post('mail_password'));
        $this->setting_model->update('mail_smtp_port', $this->post('mail_smtp_port'));
        
        if($this->post('username')){
            $this->setting_model->update('username', $this->post('username'));
        }
        
        if($this->post('password')){
            $this->setting_model->update('password', $this->post('password'));
        }
        
        $this->session->set_flashdata('msg', 'Success: Setting updated successfully!');
        
        $this->response(array('status' => 1));
    }
}
