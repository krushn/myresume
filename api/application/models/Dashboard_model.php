<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Dashboard_model extends CI_Model
{
    public function getTotalProjects()
    {
        return $this->db->count_all('projects');
    }
  
    public function getTotalAchievements()
    {
        return $this->db->count_all('achievements');
    }
    
    public function getTotalPortfolio()
    {
        return $this->db->count_all('portfolio');
    }
   
    public function getTotalCertificate()
    {
        return $this->db->count_all('education');
    }
    
    public function getGraphData($type){
        
        switch($type) {
            case 'day';
                $this->db->select("DAY(date) as label, COUNT(*) as total");
                $this->db->group_by("DAY(date)");
                break;
            default:
            case 'month':
                $this->db->select("MONTH(date) as label, COUNT(*) as total");
                $this->db->group_by("MONTH(date)");
                break;
            case 'year':
                $this->db->select("YEAR(date) as label, COUNT(*) as total");
                $this->db->group_by("YEAR(date)");
                break;							
        }

        $this->db->order_by("date DESC");

        $rows = $this->db->get('visitor_log')->result_array();
        
        $data = array('series' => array('visits'));
        $value = array();
        
        foreach($rows as $row){
            $data['labels'][] = $row['label'];
            $value[] = $row['total'];
        }
        
        $data['values'][] = $value;
                
        return $data;
    }    
}
