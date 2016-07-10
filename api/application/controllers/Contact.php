<?php

defined('BASEPATH') OR exit('No direct script access allowed');

require_once('./application/libraries/REST_Controller.php');

class Contact extends REST_Controller {

    public function __construct() {
        parent::__construct();
    }

    public function index_get() {
        
        $data['skype'] = $this->setting_model->get('skype');
        $data['mobile'] = $this->setting_model->get('mobile');
        $data['telephone'] = $this->setting_model->get('telephone');
        $data['map_image'] = site_url('upload/'.$this->setting_model->get('map_image'));
        $data['address'] = $this->setting_model->get('address');
        $data['map_url'] = $this->setting_model->get('map_url');
        
        $this->response($data);
    }
    
    public function save_post() {
        
        $email = $this->setting_model->get('skype');
        
        $data = array(
            'name' => $this->post('name'),
            'email' => $this->post('email'),
            'message' => $this->post('message'),
        );
                
        $this->db->insert('messages', $data);
        
        $response = array(
            'status' => 1
        );
        
        $this->load->library('email');
        
        $config['smtp_host'] = $this->setting_model->get('mail_host');
        $config['smtp_user'] = $this->setting_model->get('mail_username');
        $config['smtp_pass'] = $this->setting_model->get('mail_password');
        $config['smtp_port'] = $this->setting_model->get('mail_smtp_port');        
        $config['protocol'] = $this->setting_model->get('mail_protocol');

        $this->email->initialize($config);

        $this->email->from($this->post('email'), $this->post('name'));
        $this->email->to($email); 
        $this->email->subject($this->post('name'));
        $this->email->message($this->post('message'));	

        $this->email->send();

        $this->response($response);
    }
}
