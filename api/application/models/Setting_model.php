<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Setting_model extends CI_Model
{
    public $table = 'settings';
    
    public function get($name)
    {
        $row = $this->db->where('name', $name)->get($this->table)->row_array();
        
        if ($row) {
           return $row['value']; 
        } else {
            return null;
        }
    }
  
    public function update($name, $value)
    {
        return $this->db->where('name', $name)->update($this->table, array('value' => $value));
    }
}
