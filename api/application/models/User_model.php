<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class User_model extends CI_Model
{
    public function login($data){
      
        $this->load->library('encrypt');
        
        $db_username = $this->setting_model->get('username');
        $db_password = $this->encrypt->decode($this->setting_model->get('password'));
        
        if($db_username == $data['username'] && $data['password'] == $db_password){
            $result['status'] = 1;
            
            $this->session->set_userdata('is_admin_login', 1);
            
        } else {
            $result['status'] = 0;
        }
        
        return $result;
    }
    
    public function recover_pwd(){
        
        $this->load->library('encrypt');
        
        $password = $this->encrypt->decode($this->setting_model->get('password'));

        $name = $this->setting_model->get('name');
        
        $config['protocol'] = $this->setting_model->get('mail_protocol');
        $config['smtp_host'] = $this->setting_model->get('mail_host');
        $config['smtp_user'] = $this->setting_model->get('mail_username');
        $config['smtp_pass'] = $this->setting_model->get('mail_password');
        $config['smtp_port'] = $this->setting_model->get('mail_smtp_port');
        $config['charset'] = 'utf-8';
        $config['newline'] = "\r\n";
        $config['mailtype'] = 'html';
        $this->load->library('email', $config);

        $email_address = $this->setting_model->get('email_address');
       
        $this->email->to($email_address);
        $this->email->from($config['smtp_host'], $name);
        $this->email->subject('Password Mail');
        
        $this->email->message('Your password is : '.$password);
         
        $this->email->send();
        
        return array('status' => 1);
    }
}